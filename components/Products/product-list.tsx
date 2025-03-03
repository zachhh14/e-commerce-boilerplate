'use client'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { DUMMY_PRODUCTS as products } from '@/app/lib/constants'

interface ProductListProps {
    title?: string
}

const ProductList = ({ title = 'Featured Cars' }: ProductListProps) => {
    return (
        <section className='py-12 px-4 md:px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>{title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {products.map((product) => (
                    <Card key={product.id} className='overflow-hidden'>
                        <div className='aspect-video relative overflow-hidden'>
                            <Image
                                src={product.image}
                                alt={product.name}
                                className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                                width={400}
                                height={400}
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
                        <CardFooter className='flex justify-end'>
                            <Button asChild>
                                <Link href={`/products/${product.id}`}>
                                    View Details
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ProductList
