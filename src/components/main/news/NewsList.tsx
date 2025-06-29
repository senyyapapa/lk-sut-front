"use client"
import { useState } from "react"
import "./NewsList.scss"
import "@/components/main/last_messages/LastMessages.scss"
import { ChevronDown, ChevronUp } from "lucide-react"
export default function NewsList() {
    const [isOpen, setIsOpen] = useState(false)

    const news1 = [
        {headers: "Регистрация на семестр открыта", date: "2025-07-08", description: "Открыта регистрация на весенний семестр — успей подать заявку!", status: "Идет регистрация"},
        {headers: "Новые учебники в библиотеке", date: "2025-05-11", description: "В библиотеке появились новые пособия по программированию.", status: ""},
        {headers: "Стартует конкурс научных проектов", date: "2025-07-11", description: "Скоро начинается конкурс научных проектов — готовь свои идеи!", status: "Идет регистрация"},
        {headers: "Обновлено расписание занятий", date: "2025-07-14", description: "Проверь новое расписание занятий на следующий месяц в своей группе.", status: ""},
    ]


      const news = new Map([
      ['Регистрация на семестр открыта', 'Открыта регистрация на весенний семестр — успей подать заявку!'],
      ['Новые учебники в библиотеке', 'В библиотеке появились новые пособия по программированию.'],
      ['Карьерная ярмарка на следующей неделе', 'Приходи на карьерную ярмарку в следующую среду и познакомься с работодателями.'],
      ['Стартует конкурс научных проектов', 'Скоро начинается конкурс научных проектов — готовь свои идеи!'],
      ['Обновлено расписание занятий', 'Проверь новое расписание занятий на следующий месяц в своей группе.']
    ])

    return (
        <div>
            <div 
            className="news-list-container rounded-lg shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            >
                <button className="droplist-btn">{isOpen ? <ChevronUp /> : <ChevronDown />}</button>
                <div className="label-news">Новости</div>
            </div>
            {isOpen && 
                <div className="news-list">
                    {news1.map(({headers, date, description, status}, index)=> (
                        <div key={headers} className="news-card rounded-lg">
                            <span className="headers-font">{headers}</span>
                            <span className="description-font">{description}</span>
                            <div className="news-footer">
                                <span className="news-date">{date}</span>
                                {status && <span className="news-status">{status}</span>}
                            </div>
                        </div>
                    ))}
                </div>
                
            }
        </div>
    )
}