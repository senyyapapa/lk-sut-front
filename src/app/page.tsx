// App.tsx - Пример использования
'use client';
import React from 'react';
import Carousel from '../components/main/carousel/Carousel';
import { SlideData } from '../components/main/interfaces/types';
import LastMessages from '@/components/main/last_messages/LastMessages';

export default function Home(){
    const messages = new Map([
      ['Аль-Нами', 'Церемония награждения'],
      ['Акимов', 'Правила проведения мероприятия'],
      ['Шабанов', 'Лабораторная работа №2'],
      ['Ликарь', 'Шаблон отчета практического занятия'],
      ['Любимов', 'Учебник_2024_01_02']
    ]);
    const news = new Map([
  ['Регистрация на семестр открыта', 'Открыта регистрация на весенний семестр — успей подать заявку!'],
  ['Новые учебники в библиотеке', 'В библиотеке появились новые пособия по программированию.'],
  ['Карьерная ярмарка на следующей неделе', 'Приходи на карьерную ярмарку в следующую среду и познакомься с работодателями.'],
  ['Стартует конкурс научных проектов', 'Скоро начинается конкурс научных проектов — готовь свои идеи!'],
  ['Обновлено расписание занятий', 'Проверь новое расписание занятий на следующий месяц в своей группе.']
])
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
    <div className='flex justify-center flex-col items-center gap-6'>
        <div className='mb-4 mt-[8vh]'>
          <Carousel 
          slides={slidesData}
          onSlideChange={handleSlideChange}
        />
        </div>
        <LastMessages label={"Последние сообщения"} info_list={messages} />
        <LastMessages label={"Новости"} info_list={news} />
    </div>
  );
};
