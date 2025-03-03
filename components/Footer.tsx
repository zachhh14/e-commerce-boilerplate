'use client'

const Footer = () => {
    return (
        <footer className='bg-black text-white pt-16 pb-4'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>YOUR LOGO</h2>
                    </div>
                    {/* Product Links */}
                    <div>
                        <h3 className='font-semibold mb-4'>Our Social Media</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-black'
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-black'
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-black'
                                >
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-black'
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-16 pt-8 border-t border-gray-200'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-muted-foreground'>
                            © 2025 Zach Production
                        </p>
                        <div className='flex gap-6 mt-4 md:mt-0'>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-black'
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-black'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-black'
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
