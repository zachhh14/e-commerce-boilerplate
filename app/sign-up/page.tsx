'use client'

import Link from 'next/link'
import { signup } from './action'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const Signup = () => {
    const [error, setError] = useState('')

    const handleSubmit = async (formData: FormData) => {
        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')

        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        setError('')
        await signup(formData)
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
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input
                    className='bg-white text-black rounded-md p-2'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    required
                />
                <Button type='submit'>Sign up</Button>
                <span>
                    Already have an account?{' '}
                    <Link href='/login' className='text-blue-500 underline'>
                        Login
                    </Link>
                </span>
            </form>
        </div>
    )
}

export default Signup
