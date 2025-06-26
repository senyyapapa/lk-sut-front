'use client'
import Link from 'next/link'
import './login.scss'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <div className='background-login flex items-center justify-center'>
            <div className="login-card rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-600/70 p-8 shadow-lg backdrop-blur-3xl">
                <div>
                    <label className='label-login flex justify-center'>Вход</label>
                    <form className='form-login flex justify-center items-center flex-col gap-4'>
                        <input type='email' className='input-login outline-none rounded-xl'/>
                        <input type='password' className='input-login outline-none rounded-xl'/>
                        <button className='button-login rounded-xl' onClick={handleClick}>Войти</button>
                    </form>
                    <Link href="/" className='forgot-link opacity-70 flex justify-center'>Забыли пароль?</Link>
                </div>
            </div>
        </div>
    )
}