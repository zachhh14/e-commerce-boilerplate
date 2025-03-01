import { ProductDetails } from '@/components/Products/ProductDetails'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <>
            <Navbar />
            <ProductDetails id={params.id} />
            <Footer />
        </>
    )
}
