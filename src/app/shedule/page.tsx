"use client"
import SheduleCalendar from "@/components/shedule/Calendar";
import { useState } from "react";
import SheduleSlide from "@/components/shedule/SheduleSlide";

export default function ShedulePage() {
    const [currentData, setCurrentData] = useState(new Date())
    const data = {
    // "startAt": "10:30",
    // "endAt": "12:00",
    // "typeLesson": "Практические занятия",
    // "name": "Универсальные программируемые интегральные схемы в киберфизических системах", 
    // "teacherName": "Алексеев Алексей Большевиков", 
    // "classroom": "404/2",
    }
    return (
        <div>
            <div>
                <SheduleCalendar currentData={currentData} setCurrentData={setCurrentData} />    
            </div>
            <SheduleSlide data={data} />
        </div>
    )
}
