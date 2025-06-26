'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CarouselProps, SlideData } from './interfaces/types';
import { useTouch } from './hooks/useTouch';
import styles from './CarouselStyles.module.scss';

const Carousel: React.FC<CarouselProps> = ({ 
  slides, 
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // Смещение при захватывании
  const [isDragging, setIsDragging] = useState(false); // Флаг захватывания
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Создаем бесконечную карусель, добавляя копии слайдов
  const extendedSlides = [
    slides[slides.length - 1], // последний слайд в начале
    ...slides,
    slides[0] // первый слайд в конце
  ];

  const goToSlide = useCallback((index: number, withTransition = true) => {
    if (isTransitioning && !isDragging) return;
    
    setIsTransitioning(withTransition);
    setCurrentIndex(index);
    
    if (withTransition) {
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [isTransitioning, isDragging]);

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + 1;
    goToSlide(nextIndex);
    
    // Если дошли до конца, возвращаемся к началу без анимации
    if (nextIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        goToSlide(1, false);
      }, 300);
    }
  }, [currentIndex, extendedSlides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex - 1;
    goToSlide(prevIndex);
    
    // Если дошли до начала, переходим к концу без анимации
    if (prevIndex === 0) {
      setTimeout(() => {
        goToSlide(extendedSlides.length - 2, false);
      }, 300);
    }
  }, [currentIndex, extendedSlides.length, goToSlide]);

  const goToSpecificSlide = useCallback((index: number) => {
    goToSlide(index + 1); // +1 потому что у нас есть дополнительный слайд в начале
  }, [goToSlide]);

  // Определяем реальный индекс для индикаторов
  const getRealIndex = useCallback(() => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex === extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  }, [currentIndex, slides.length, extendedSlides.length]);

  // Колбек для изменения слайда
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(getRealIndex());
    }
  }, [currentIndex, onSlideChange, getRealIndex]);

  // Инициализация позиции
  useEffect(() => {
    goToSlide(1, false);
  }, []);

  // Обработчики для захватывания
  const handleDrag = useCallback((offset: number) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setDragOffset(offset);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset(0);
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
    console.log('Отметиться на:', slideData);
    // Здесь будет логика отметки посещения
  };

  // Вычисляем финальное смещение с учетом захватывания
  const getTransform = useCallback(() => {
    const baseTransform = -currentIndex * 100;
    const dragTransform = isDragging ? -(dragOffset / (carouselRef.current?.offsetWidth || 1)) * 100 : 0;
    return baseTransform + dragTransform;
  }, [currentIndex, isDragging, dragOffset]);

  return (
    <div 
      className={styles.carousel}
      ref={carouselRef}
      {...touchHandlers}
    >
      <div 
        className={styles.slidesContainer}
        style={{
          transform: `translateX(${getTransform()}%)`,
          transition: (isTransitioning && !isDragging) ? 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
          cursor: isDragging ? 'grabbing' : 'grab'
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
              <div className={`${styles.markButton} ${
                slide.lessonType === 'лекция' ? styles.lection :
                slide.lessonType === 'практика' ? styles.practice :
                slide.lessonType === 'лабораторная' ? styles.lab :
                ''
                }`}>
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
      
      {/* Индикаторы */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${getRealIndex() === index ? styles.active : ''}`}
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