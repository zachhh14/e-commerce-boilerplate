import Link from 'next/link'
import { login } from './actions'

export default function LoginPage() {
    return (
        <div className='flex justify-center items-center bg-black text-white w-full h-screen'>
            <form className='flex flex-col gap-4'>
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
                <button formAction={login}>Log in</button>
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
