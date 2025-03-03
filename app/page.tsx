import Footer from '@/components/footer'
import HeroCarousel from '@/components/hero-carousel'
import Navbar from '@/components/navbar'
import ProductList from '@/components/products/product-list'

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
