"use client"
import { useEffect, useState } from 'react';
import BurgerBtn from '../burger_button/BurgerBtn'
import './sidebar.scss'
import { usePathname } from 'next/navigation';
// TODO: Добавить, чтобы при клике вне сайдбара, закрывался сайдбар и бургер возвращался в исходное состояние
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    if (pathname === '/login') {
        return null
    }
    return(
        <div className={isOpen ? 'sidebar-window' : ''}>
            <div className='fixed p-4 z-1000'>
                <BurgerBtn onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />
            </div>
            {isOpen ? 
            <>
                <div className='sidebar'>
                    <div className='h-[8vh] shadow-lg w-full'></div>
                    <div>
                        
                    </div>
                </div>
                <div className='sidebar-close' onClick={() => setIsOpen(prev => !prev)}></div>
            </>
            : null  }
        </div>
    )
}
