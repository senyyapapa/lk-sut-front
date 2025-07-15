"use client"
import React, { useState } from 'react'
import './Calendare.scss'
import { useTouch } from '@/hooks/useTouch'

interface SheduleProps {
    currentData: Date, 
    setCurrentData: React.Dispatch<React.SetStateAction<Date>>
}

export default function SheduleCalendar({currentData, setCurrentData} : SheduleProps) {

    const changeMonth = (amount: number) => {
        setCurrentData(prevDate => {
            const newDate = new Date(prevDate)
            newDate.setMonth(newDate.getMonth() + amount) 
            newDate.setDate(1)
            return newDate
        })
    } 

    const changeDay = (amount: number) => {
        setCurrentData(prevDate => {
            const newDate = new Date(prevDate)
            newDate.setDate(newDate.getDate() + amount)
            return newDate
        })
    }

    const day = currentData.getDate()
    const year = currentData.getFullYear()
    const month = currentData.getMonth()


    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    const calendarDays = [];      

    for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }                             

    const choseDay = (day: number) => {
        setCurrentData(prevDate => {
            const newDate =  new Date(prevDate)
            newDate.setDate(day)
            return newDate 
        })
    }

    for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(<div key={day} onClick={() => choseDay(day)} className={currentData.getDate() == day ? "calendar-day-selected " : "calendar-day" }>{day}</div>);
    }
    const mothName = currentData.toLocaleString('ru-RU', { month: 'long' })
    const monthFormating = mothName.charAt(0).toUpperCase() + mothName.slice(1)
    const touchHandler = useTouch({
        onSwipeLeft: () => changeMonth(1),
        onSwipeRight: () => changeMonth(-1)
    })

    return (
        <div className='flex flex-col mt-4 items-center gap-2'>
            <div className="calendar-label rounded-3xl flex flex-row justify-between items-center px-4" style={{ minWidth: 200 }}>
                <button className='mx-2' onClick={() => changeMonth(-1)}>←</button>
                <div className='month-label mx-4 text-center flex-1'>{monthFormating} {year}</div>
                <button className='mx-2' onClick={() => changeMonth(1)}>→</button>
            </div>
            <div className='calendar-body rounded-2xl' {...touchHandler}>
                <div className="calendar-day-name">Пн</div>
                <div className="calendar-day-name">Вт</div>
                <div className="calendar-day-name">Ср</div>
                <div className="calendar-day-name">Чт</div>
                <div className="calendar-day-name">Пт</div>
                <div className="calendar-day-name">Сб</div>
                <div className="calendar-day-name">Вс</div>
                {calendarDays}
            </div>
            <div className="calendar-label rounded-3xl flex flex-row justify-between items-center px-4" style={{ minWidth: 200 }}>
                <button className='mx-2' onClick={() => changeDay(-1)}>←</button>
                <div className='month-label mx-4 text-center flex-1'>{day} {month == 7 || month == 2 ? monthFormating + "а" : monthFormating.slice(0, mothName.length - 1) + "я" }</div>
                <button className='mx-2' onClick={() => changeDay(1)}>→</button>
            </div>
        </div>
    )
}
