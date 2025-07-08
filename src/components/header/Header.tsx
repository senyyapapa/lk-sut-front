'use client'
import Link from 'next/link';
import './Header.scss';
import { usePathname } from 'next/navigation';



export default function Header() {
    const pathname = usePathname();
    if (pathname === "/login"){
        return null;
    }
    return (
        <>
            <div className='header shadow-lg fixed z-50'>
                <div className='items-header flex items-center gap-4'>
                    <a href="https://lms.spbgut.ru/">LMS</a>
                    <Link href={pathname === "/" ? "/account" : "/"}>{pathname === "/account" ? "Главная" : "Профиль"}</Link>
                </div>
            </div>
        </>
    )
}
