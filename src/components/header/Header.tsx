'use client'
import Link from 'next/link';
import './Header.scss';
import { usePathname } from 'next/navigation';
import ChangeBtn from "@/components/changetheme_button/ChangeBtn";


export default function Header() {
    const pathname = usePathname();
    if (pathname === "/login"){
        return null;
    }
    return (
        <>
            <div className='header shadow-lg fixed z-50'>
                <div className='items-header flex items-center gap-4'>
                    <ChangeBtn />
                    <a href="https://lms.spbgut.ru/">LMS</a>
                    <Link href={pathname === "/" ? "/account" : "/"}>{pathname === "/account" ? "Главная" : "Профиль"}</Link>
                </div>
            </div>
        </>
    )
}