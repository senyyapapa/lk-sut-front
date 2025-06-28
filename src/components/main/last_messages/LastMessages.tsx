'use client'
import { useState } from 'react';
import './LastMessages.scss';
import {ChevronDown, ChevronUp} from 'lucide-react'
import { LastMessageProps } from './LastMessagesProps';


export default function LastMessages({label, info_list}: LastMessageProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="last-messages-container rounded-lg shadow-lg "
                onClick={() => setIsOpen(!isOpen)}
            >
                <button 
                className='droplist-btn'
                
                >{isOpen ? <ChevronUp /> : <ChevronDown />}</button>
                <div className='label-message'>{label}</div>
                {/*TODO: Добавить логику для отображения последних сообщений */}
            </div>
            {isOpen && (
                    <div className='last-messages-list rounded-lg shadow-2xl mt-14'>
                        <div className='mt-4'>

                            {Array.from(info_list.entries()).map(([headers, description], index) => (
                                <div key={headers} className={`${index === 0 ? "first-message flex flex-col items-start" : "message flex flex-col items-start"}`}>
                                    <span className='message-name'>{headers}.</span>
                                    {/* TODO: написать алгоритм, чтобы сообщение нормально сокращалось, и могло по максимуму влезть в видное окошко*/}
                                    <span className='message-text'>{description.length > 61 ? description.slice(0, 61) + "..." : description}</span>
                            </div>
                            ))}
                     </div>

                    </div>
                )}
        </div>
    )
}