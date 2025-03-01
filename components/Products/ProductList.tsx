'use client'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

// You can move this to a separate types file later
type Product = {
    id: string
    name: string
    price: number
    image: string
    description: string
}

// Example data - replace with your actual data

// ... existing code ...

const products: Product[] = [
    {
        id: '1',
        name: 'Tesla Model 3',
        price: 40000,
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80',
        description: 'All-electric sedan with autopilot capabilities',
    },
    {
        id: '2',
        name: 'BMW i4',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80',
        description: 'Luxury electric vehicle with premium features',
    },
    {
        id: '3',
        name: 'Porsche Taycan',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80',
        description: 'High-performance electric sports car',
    },
    {
        id: '4',
        name: 'Tesla Model 3',
        price: 40000,
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80',
        description: 'All-electric sedan with autopilot capabilities',
    },
    {
        id: '5',
        name: 'BMW i4',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80',
        description: 'Luxury electric vehicle with premium features',
    },
    {
        id: '6',
        name: 'Porsche Taycan',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80',
        description: 'High-performance electric sports car',
    },
]

// ... existing code ...

export function ProductList() {
    return (
        <section className='py-12 px-4 md:px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>
                Featured Cars
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {products.map((product) => (
                    <Card key={product.id} className='overflow-hidden'>
                        <div className='aspect-video relative overflow-hidden'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className='flex justify-between items-center'>
                                <span>{product.name}</span>
                                <span className='text-lg font-medium'>
                                    ${product.price.toLocaleString()}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-muted-foreground'>
                                {product.description}
                            </p>
                        </CardContent>
                        <CardFooter className='flex justify-between'>
                            <Button variant='outline'>Learn More</Button>
                            <Button>Buy Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
