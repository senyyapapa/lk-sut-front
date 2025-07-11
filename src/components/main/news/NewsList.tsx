"use client";
import { useState } from "react";
import "./NewsList.scss";
import "@/components/main/last_messages/LastMessages.scss";
import { useRef } from "react";

export default function NewsList() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const minDuration = 300;
  const maxDuration = 800;
  const durationPerItem = 150;

  let animationDuration = news1.length * durationPerItem;
  animationDuration = Math.min(
    Math.max(animationDuration, minDuration),
    maxDuration
  );

  return (
    <div>
      <div
        className="news-list-container rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="label-news ml-4">Новости</div>
        <button
          className="text-gray-600 focus:outline-none transition-transform duration-300 mr-4 ease-in-out"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transitionDuration: `${animationDuration}ms`,
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
        ref={contentRef}
        className={`news-wrapper transition-max-height duration-300 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="news-list">
          {news1.map(({ headers, date, description, status }) => (
            <div
              key={headers}
              className="news-card rounded-md transition-colors duration-200"
            >
              <span className="headers-font">{headers}</span>
              <span className="description-font">{description}</span>
              <div className="news-footer">
                <span className="news-date">{date}</span>
                {status && <span className="news-status">{status}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const news1 = [
  {
    headers: "Регистрация на семестр открыта",
    date: "2025-07-08",
    description:
      "Открыта регистрация на весенний семестр — успей подать заявку!",
    status: "Идет регистрация",
  },
  {
    headers: "Новые учебники в библиотеке",
    date: "2025-05-11",
    description: "В библиотеке появились новые пособия по программированию.",
    status: "",
  },
  {
    headers: "Стартует конкурс научных проектов",
    date: "2025-07-11",
    description:
      "Скоро начинается конкурс научных проектов — готовь свои идеи!",
    status: "Идет регистрация",
  },
  {
    headers: "Обновлено расписание занятий",
    date: "2025-07-14",
    description:
      "Проверь новое расписание занятий на следующий месяц в своей группе.",
    status: "",
  },
];
