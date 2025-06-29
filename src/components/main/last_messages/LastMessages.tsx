'use client'
import { useState } from 'react';
import './LastMessages.scss';
import {ChevronDown, ChevronUp} from 'lucide-react'
import { LastMessageProps } from './LastMessagesProps';


export default function LastMessages() {
    const [isOpen, setIsOpen] = useState(false);
    const messages = new Map([
        ['Аль-Нами', 'Церемония награждения'],
        ['Акимов', 'Правила проведения мероприятия'],
        ['Шабанов', 'Лабораторная работа №2'],
        ['Ликарь', 'Шаблон отчета практического занятия'],
        ['Любимов', 'Учебник_2024_01_02']
        ]);
        //TODO: Реализовать запрос с бекенда через useEffect
    return (
        <div>
            <div className="last-messages-container rounded-lg shadow-lg "
                onClick={() => setIsOpen(!isOpen)}
            >
                <button 
                className='droplist-btn'
                
                >{isOpen ? <ChevronUp /> : <ChevronDown />}</button>
                <div className='label-message'>Последние сообщения</div>
                {/*TODO: Добавить логику для отображения последних сообщений */}
            </div>
            {isOpen && (
                    <div className='last-messages-list rounded-lg shadow-2xl mt-14'>
                        <div className='mt-4'>

                            {Array.from(messages.entries()).map(([author, theme], index) => (
                                <div key={author} className={`${index === 0 ? "first-message flex flex-col items-start" : "message flex flex-col items-start"}`}>
                                    <span className='message-name'>{author}.</span>
                                    {/* TODO: написать алгоритм, чтобы сообщение нормально сокращалось, и могло по максимуму влезть в видное окошко*/}
                                    <span className='message-text'>{theme.length > 61 ? theme.slice(0, 61) + "..." : theme}</span>
                            </div>
                            ))}
                     </div>

                    </div>
                )}
        </div>
    )
}