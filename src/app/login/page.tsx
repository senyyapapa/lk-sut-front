'use client'

import Link from 'next/link'
import './login.scss'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'


const loginSchema = z.object({
  email: z.string().email('Неверный формат email'),
  password: z.string().min(6, 'Пароль должен быть минимум из 6 символов'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/')
      } else {
        const errorData = await response.json()
        alert(errorData.error || 'Ошибка входа')
      }
    } catch (error) {
      console.error('Ошибка при авторизации:', error)
      alert('Произошла ошибка при входе')
    }
  }

  return (
    <div>
    <div className='background-login flex items-center justify-center'>
      <div className="login-card rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-600/70 p-8 shadow-lg backdrop-blur-3xl">
        <div>
          <label className='label-login flex justify-center'>Вход</label>
          <form 
            className='form-login flex justify-center items-center flex-col gap-4' 
            onSubmit={handleSubmit(onSubmit)}
          >
            <input 
              type='email' 
              placeholder="Email"
              {...register('email')}
              className={`input-login outline-none rounded-xl ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

            <input 
              type='password' 
              placeholder="Пароль"
              {...register('password')}
              className={`input-login outline-none rounded-xl ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

            <button 
              type="submit" 
              className='button-login rounded-xl'
            >
              Войти
            </button>
          </form>
          <div className='forgot-link opacity-70 flex justify-center'>
          <Link href="/forgot-password" >
            Забыли пароль?
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
