import { useRef, useCallback } from "react";

interface TouchHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
}

interface UseTouchProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onDrag?: (offset: number) => void;
  onDragEnd?: () => void;
  threshold?: number;
}

export const useTouch = ({
  onSwipeLeft,
  onSwipeRight,
  onDrag,
  onDragEnd,
  threshold = 50,
}: UseTouchProps): TouchHandlers => {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  const handleStart = useCallback((clientX: number, clientY: number) => {
    touchStart.current = { x: clientX, y: clientY };
    touchEnd.current = null;
    isDragging.current = true;
    hasMoved.current = false;
  }, []);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging.current || !touchStart.current) return;

      touchEnd.current = { x: clientX, y: clientY };
      const deltaX = touchStart.current.x - clientX;
      const deltaY = touchStart.current.y - clientY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        hasMoved.current = true;
        if (onDrag) {
          onDrag(deltaX);
        }
      }
    },
    [onDrag]
  );

  const handleEnd = useCallback(() => {
    if (!touchStart.current || !isDragging.current) {
      isDragging.current = false;
      return;
    }

    if (hasMoved.current && touchEnd.current) {
      const distanceX = touchStart.current.x - touchEnd.current.x;
      const distanceY = touchStart.current.y - touchEnd.current.y;
      const absDistanceX = Math.abs(distanceX);
      const absDistanceY = Math.abs(distanceY);

      if (absDistanceX > absDistanceY && absDistanceX > threshold) {
        if (distanceX > 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }
    }

    if (onDragEnd) {
      onDragEnd();
    }

    isDragging.current = false;
    hasMoved.current = false;
    touchStart.current = null;
    touchEnd.current = null;
  }, [onSwipeLeft, onSwipeRight, onDragEnd, threshold]);

  return {
    onTouchStart: (e: React.TouchEvent) => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    },
    onTouchMove: (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    },
    onTouchEnd: handleEnd,
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
      handleStart(e.clientX, e.clientY);
    },
    onMouseMove: (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      handleMove(e.clientX, e.clientY);
    },
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd,
  };
};
