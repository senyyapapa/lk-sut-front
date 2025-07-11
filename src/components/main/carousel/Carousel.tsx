"use client";
import React, { useState, useEffect, useCallback, useRef, use } from "react";
import { CarouselProps, SlideData } from "../interfaces/types";
import { useTouch } from "../hooks/useTouch";
import styles from "./CarouselStyles.module.scss";
import { enableScroll, disableScroll } from "../utils/scrollControl";

const Carousel: React.FC<CarouselProps> = ({ slides, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const goToSlide = useCallback(
    (index: number, withTransition = true) => {
      if (isTransitioning && !isDragging) return;

      setIsTransitioning(withTransition);
      setCurrentIndex(index);

      if (withTransition) {
        setTimeout(() => setIsTransitioning(false), 300);
      }
    },
    [isTransitioning, isDragging]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + 1;
    goToSlide(nextIndex);

    if (nextIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        goToSlide(1, false);
      }, 300);
    }
  }, [currentIndex, extendedSlides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex - 1;
    goToSlide(prevIndex);

    if (prevIndex === 0) {
      setTimeout(() => {
        goToSlide(extendedSlides.length - 2, false);
      }, 300);
    }
  }, [currentIndex, extendedSlides.length, goToSlide]);

  const goToSpecificSlide = useCallback(
    (index: number) => {
      goToSlide(index + 1);
    },
    [goToSlide]
  );

  const getRealIndex = useCallback(() => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex === extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  }, [currentIndex, slides.length, extendedSlides.length]);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(getRealIndex());
    }
  }, [currentIndex, onSlideChange, getRealIndex]);

  useEffect(() => {
    goToSlide(1, false);
  }, []);

  const handleDrag = useCallback((offset: number) => {
    if (!carouselRef.current) return;

    setIsDragging(true);
    setDragOffset(offset);
    disableScroll();
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset(0);
    enableScroll();
  }, []);

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  const touchHandlers = useTouch({
    onSwipeLeft: () => {
      nextSlide();
    },
    onSwipeRight: () => {
      prevSlide();
    },
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
  });

  const handleMarkAttendance = (slideData: SlideData) => {
    console.log("Отметиться на:", slideData);
    //TODO: Добавить логиику для отметки на занятии
  };

  const getTransform = useCallback(() => {
    const baseTransform = -currentIndex * 100;
    const dragTransform = isDragging
      ? -(dragOffset / (carouselRef.current?.offsetWidth || 1)) * 100
      : 0;
    return baseTransform + dragTransform;
  }, [currentIndex, isDragging, dragOffset]);

  return (
    <div className={styles.carousel} ref={carouselRef} {...touchHandlers}>
      <div
        className={styles.slidesContainer}
        style={{
          transform: `translateX(${getTransform()}%)`,
          transition:
            isTransitioning && !isDragging
              ? "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className={styles.slide}>
            <div className={styles.slideHeader}>
              <span className={styles.currentInfo}>{slide.currentInfo}</span>
              <span className={styles.studentName}>{slide.studentName}</span>
            </div>

            <div className={styles.slideContent}>
              <h2 className={styles.subject}>{slide.subject}</h2>
            </div>

            <div className={styles.slideFooter}>
              <div
                className={`${
                  slide.lessonType === "лекция"
                    ? styles.lection
                    : slide.lessonType === "практика"
                    ? styles.practice
                    : slide.lessonType === "лабораторная"
                    ? styles.lab
                    : slide.lessonType === "экзамен"
                    ? styles.ekz
                    : slide.lessonType === "зачет"
                    ? styles.zach
                    : ""
                }`}
              >
                {slide.lessonType}
              </div>
              <button
                className={styles.markButton}
                onClick={() => handleMarkAttendance(slide)}
              >
                отметиться
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              getRealIndex() === index ? styles.active : ""
            }`}
            onClick={() => {
              goToSpecificSlide(index);
            }}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
