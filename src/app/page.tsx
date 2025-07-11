// App.tsx - Пример использования
"use client";
import React from "react";
import Carousel from "../components/main/carousel/Carousel";
import { SlideData } from "../components/main/interfaces/types";
import LastMessages from "@/components/main/last_messages/LastMessages";
import NewsList from "@/components/main/news/NewsList";

export default function Home() {
  const slidesData: SlideData[] = [
    {
      id: "1",
      currentInfo: "Сейчас: 106/1",
      groupNumber: "106/1",
      studentName: "Алексеев А.Б",
      subject:
        "Универсальные программируемые интегральные схемы в киберфизических системах",
      lessonType: "лекция",
    },
    {
      id: "2",
      currentInfo: "Сейчас: 204/2",
      groupNumber: "204/2",
      studentName: "Петров В.Г",
      subject: "Интеллектуальные информационные системы и технологии",
      lessonType: "практика",
    },
    {
      id: "3",
      currentInfo: "Сейчас: 301/3",
      groupNumber: "301/3",
      studentName: "Иванова М.С",
      subject: "История",
      lessonType: "зачет",
    },
    {
      id: "4",
      currentInfo: "Сейчас: 402/4",
      groupNumber: "402/4",
      studentName: "Сидоров Д.К",
      subject: "Химия",
      lessonType: "лабораторная",
    },
    {
      id: "5",
      currentInfo: "Сейчас: 105/5",
      groupNumber: "105/5",
      studentName: "Козлова А.В",
      subject: "История",
      lessonType: "экзамен",
    },
  ];

  const handleSlideChange = (currentIndex: number) => {
    console.log("Текущий слайд:", currentIndex, slidesData[currentIndex]);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-6">
      <div className="mb-4 mt-[4vh]">
        <Carousel slides={slidesData} onSlideChange={handleSlideChange} />
      </div>
      <LastMessages />
      <NewsList />
    </div>
  );
}
