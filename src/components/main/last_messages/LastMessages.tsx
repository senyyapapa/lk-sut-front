"use client";
import { useEffect, useState } from "react";
import "./LastMessages.scss";
import useTimeAgo from "../hooks/useTimeAgo";

const mockMessages = [
  {
    id: 1,
    author: "Аль-Нами",
    title: "Церемония награждения",
    sentAt: new Date("2025-06-30T21:51:00"),
  },
  {
    id: 2,
    author: "Акимов",
    title: "Правила проведения мероприятия",
    sentAt: new Date("2025-06-30T11:55:00"),
  },
  {
    id: 3,
    author: "Шабанов",
    title: "Лабораторная работа №2",
    sentAt: new Date("2025-06-30T11:30:00"),
  },
  {
    id: 4,
    author: "Ликарь",
    title: "Шаблон отчета практического занятия",
    sentAt: new Date("2025-06-30T11:00:00"),
  },
  {
    id: 5,
    author: "Любимов",
    title: "Учебник_2024_01_02",
    sentAt: new Date("2025-06-30T10:00:00"),
  },
];

export default function LastMessages() {
  const [isExpanded, setIsExpanded] = useState(false);

  //TODO: Реализовать запрос с бекенда через useEffect
  return (
    <div>
      <div className="last-message-container w-[90vw] rounded-lg shadow-md p-3">
        <div
          className="flex items-center justify-between mb-3 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-base font-semibold">
            Последние сообщения
          </h3>
          <button
            className="text-gray-600 focus:outline-none transition-transform duration-300 ease-in-out"
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[32rem]" : "max-h-38"
          }`}
        >
          <div className="space-y-2">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className="last-messages-label"
                onClick={() => alert(`Переход к сообщению "${message.title}"`)}
              >
                <div className="flex items-start space-x-2">
                  <div className="flex flex-col">
                    <p className="message-sender">
                      {message.author}
                    </p>
                    <p className="message-title">{message.title}</p>
                    <p className="message-date">
                      {useTimeAgo(message.sentAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
