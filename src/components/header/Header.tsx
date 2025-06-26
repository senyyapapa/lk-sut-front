'use client'
import Link from 'next/link';
import './Header.scss';
import { usePathname } from 'next/navigation';
import path from 'path';
export default function Header() {
    const pathname = usePathname();
    if (pathname === "/login"){
        return null;
    }
    return (
        <div className='header shadow-lg'>
            <div>
                <Link href={pathname === "/" ? "/account" : "/"} className='profile flex items-center'>{pathname === "/account" ? "Главная" : "Профиль"}</Link>
            </div>
        </div>
    )
}