import { Navbar } from '@/components/Navbar'
import { HeroCarousel } from '@/components/HeroCarousel'
import { ProductList } from '@/components/Products/ProductList'
import { Footer } from '@/components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <ProductList />
            <Footer />
        </>
    )
}

export default Home
