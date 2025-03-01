'use client'

import Link from 'next/link'
import { login } from './actions'
import { useState } from 'react'

export default function LoginPage() {
    const [error, setError] = useState('')

    const handleSubmit = async (formData: FormData) => {
        const email = formData.get('email')
        const password = formData.get('password')

        if (!email || !password) {
            setError('Please fill in all fields')
            return
        }

        setError('')

        try {
            const response = await login(formData)
        } catch (error) {
            setError('Invalid email or password')
        }
    }

    return (
        <div className='flex justify-center items-center bg-black text-white w-full h-screen'>
            <form className='flex flex-col gap-4' action={handleSubmit}>
                {error && <p className='text-red-500'>{error}</p>}
                <label htmlFor='email'>Email:</label>
                <input
                    className='bg-white text-black rounded-md p-2'
                    id='email'
                    name='email'
                    type='email'
                    required
                />
                <label htmlFor='password'>Password:</label>
                <input
                    className='bg-white text-black rounded-md p-2'
                    id='password'
                    name='password'
                    type='password'
                    required
                />
                <button type='submit'>Log in</button>
                <span>
                    Don't have an account?{' '}
                    <Link href='/sign-up' className='text-blue-500 underline'>
                        Sign up
                    </Link>
                </span>
            </form>
        </div>
    )
}
