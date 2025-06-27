// App.tsx - Пример использования
'use client';
import React from 'react';
import Carousel from '../components/main/Carousel';
import { SlideData } from '../components/main/interfaces/types';

export default function Home(){
  const slidesData: SlideData[] = [
    {
      id: '1',
      currentInfo: 'Сейчас: 106/1',
      groupNumber: '106/1',
      studentName: 'Алексеев А.Б',
      subject: 'Высшая математика',
      lessonType: 'лекция'
    },
    {
      id: '2',
      currentInfo: 'Сейчас: 204/2',
      groupNumber: '204/2',
      studentName: 'Петров В.Г',
      subject: 'Физика',
      lessonType: 'практика'
    },
    {
      id: '3',
      currentInfo: 'Сейчас: 301/3',
      groupNumber: '301/3',
      studentName: 'Иванова М.С',
      subject: 'Технологии распределенны',
      lessonType: 'практика'
    },
    {
      id: '4',
      currentInfo: 'Сейчас: 402/4',
      groupNumber: '402/4',
      studentName: 'Сидоров Д.К',
      subject: 'Химия',
      lessonType: 'лабораторная'
    },
    {
      id: '5',
      currentInfo: 'Сейчас: 105/5',
      groupNumber: '105/5',
      studentName: 'Козлова А.В',
      subject: 'История',
      lessonType: 'лекция'
    }
  ];

  const handleSlideChange = (currentIndex: number) => {
    console.log('Текущий слайд:', currentIndex, slidesData[currentIndex]);
  };

  return (
    <div className='flex justify-center items-center'>
        <Carousel 
          slides={slidesData}
          onSlideChange={handleSlideChange}
        />
    </div>
  );
};
