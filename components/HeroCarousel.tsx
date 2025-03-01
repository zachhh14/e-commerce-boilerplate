'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const CAROUSEL_ITEMS = [
    {
        title: 'Welcome to Our Site',
        description: 'Discover amazing products and services',
        buttonText: 'Get Started',
        image: 'https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80',
    },
    {
        title: 'Special Offers',
        description: "Limited time deals you don't want to miss",
        buttonText: 'View Offers',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80',
    },
    {
        title: 'Join Our Community',
        description: 'Connect with like-minded people',
        buttonText: 'Learn More',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80',
    },
]

export const HeroCarousel = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Carousel
            opts={{
                align: 'start',
                loop: false,
            }}
            className='w-full'
        >
            <CarouselContent>
                {CAROUSEL_ITEMS.map((item) => (
                    <CarouselItem key={item.title}>
                        <Card className='border-0'>
                            <CardContent className='relative h-[600px] p-0'>
                                <div
                                    className='absolute inset-0 bg-cover bg-center'
                                    style={{
                                        backgroundImage: `url('${item.image}')`,
                                    }}
                                >
                                    {/* <div className='absolute inset-0 bg-black/40' /> */}
                                    <div className='relative h-full flex items-center justify-center'>
                                        <div className='text-center text-white px-4 space-y-4'>
                                            <h1
                                                className={cn(
                                                    'text-4xl font-bold tracking-tight lg:text-5xl'
                                                )}
                                            >
                                                {item.title}
                                            </h1>
                                            <p className='text-xl text-white italic'>
                                                {item.description}
                                            </p>
                                            <Button size='lg' className='mt-4'>
                                                {item.buttonText}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 z-10' />
            <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 z-10' />
        </Carousel>
    )
}
