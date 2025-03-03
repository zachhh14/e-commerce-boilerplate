import Footer from '@/components/Footer'
import HeroCarousel from '@/components/hero-carousel'
import Navbar from '@/components/Navbar'
import ProductList from '@/components/Products/product-list'

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
