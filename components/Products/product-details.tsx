'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

// Example data - replace with your actual data fetching
const PRODUCT_DATA = {
    id: '1',
    name: 'Tesla Model 3',
    price: 40000,
    images: [
        'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80',
        'https://images.unsplash.com/photo-1537984822441-cff330075342?q=80',
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80',
    ],
    description: 'All-electric sedan with autopilot capabilities',
    specs: {
        range: '358 miles',
        acceleration: '0-60 mph in 3.1s',
        topSpeed: '162 mph',
        power: '450 hp',
    },
    features: [
        'Autopilot',
        '15" Touchscreen',
        'Glass Roof',
        'Premium Audio',
        'Wireless Charging',
    ],
}

const ProductDetails = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-4'>
                    <div className='aspect-video overflow-hidden rounded-lg'>
                        <Image
                            src={PRODUCT_DATA.images[0]}
                            alt={PRODUCT_DATA.name}
                            className='w-full h-full object-cover'
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {PRODUCT_DATA.images.slice(1).map((image, index) => (
                            <div
                                key={image}
                                className='aspect-video rounded-lg overflow-hidden'
                            >
                                <Image
                                    src={image}
                                    alt={`${PRODUCT_DATA.name}-image-${index}`}
                                    className='w-full h-full object-cover hover:scale-105 transition-transform'
                                    width={400}
                                    height={400}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='space-y-6'>
                    <div>
                        <h1 className='text-3xl font-bold'>
                            {PRODUCT_DATA.name}
                        </h1>
                        <div className='mt-4 flex items-center gap-4'>
                            <span className='text-2xl font-semibold'>
                                ${PRODUCT_DATA.price.toLocaleString()}
                            </span>
                            <Badge>New Arrival</Badge>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h2 className='font-semibold mb-2'>Description</h2>
                        <p className='text-muted-foreground'>
                            {PRODUCT_DATA.description}
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold mb-2'>
                            Key Specifications
                        </h2>
                        <div className='grid grid-cols-2 gap-4'>
                            {Object.entries(PRODUCT_DATA.specs).map(
                                ([key, value]) => (
                                    <div key={key}>
                                        <dt className='text-muted-foreground capitalize'>
                                            {key}
                                        </dt>
                                        <dd className='font-medium'>{value}</dd>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div>
                        <h2 className='font-semibold mb-2'>Features</h2>
                        <ul className='grid grid-cols-2 gap-2'>
                            {PRODUCT_DATA.features.map((feature) => (
                                <li
                                    key={feature}
                                    className='flex items-center gap-2'
                                >
                                    <svg
                                        className='w-5 h-5 text-green-500'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M5 13l4 4L19 7'
                                        />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='pt-6 space-x-4'>
                        <Button size='lg'>Buy Now</Button>
                        <Button size='lg' variant='outline'>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails