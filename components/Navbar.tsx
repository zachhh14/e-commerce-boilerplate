'use client'

import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const TABS = [
        { label: 'Home', href: '/' },
        { label: 'Sell', href: '/sell' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Client Releases', href: '/client-releases' },
        { label: 'Careers', href: '/careers' },
        { label: 'Location', href: '/location' },
    ]

    if (!isLoggedIn) {
        TABS.push({ label: 'Login', href: '/login' })
        TABS.push({ label: 'Sign Up', href: '/sign-up' })
    }

    return (
        <header className='bg-white shadow-sm'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex-shrink-0'>
                        <Link href='/' className='text-xl font-bold'>
                            Your Logo
                        </Link>
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        {TABS.map((tab) => (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className='hover:text-gray-600 transition-colors'
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none'
                        >
                            <svg
                                className='h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden ${
                    isOpen ? 'block' : 'hidden'
                } bg-white border-t`}
            >
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    <Link
                        href='/'
                        className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100'
                    >
                        Home
                    </Link>
                    <Link
                        href='/login'
                        className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100'
                    >
                        Login
                    </Link>
                    <Link
                        href='/sign-up'
                        className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100'
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    )
}
