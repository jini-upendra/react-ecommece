import React from 'react';
import HomePageSlider  from './pages/home-page-slider'
import Banner from './pages/banner';
import CategoryImageSlide from './pages/category-image-slide';
import TrandingProduct from './pages/tranding-product';
import Countdown from './pages/countdown';
import OurProduct from './pages/our-product';
import Testimonial from './pages/testimonial';
import QuickView from './pages/quick-view';
import Blog from './pages/blog';
import NewsLetter from './pages/news-letter';
import BrandLogo from './pages/brand-logo';

const HomeComponent =()=>{
    return(
        <>
            <HomePageSlider />
            <Banner />
            <CategoryImageSlide />
            <TrandingProduct />
            <Countdown />
            <OurProduct />
            <Testimonial />
            <QuickView />
            <Blog />
            <NewsLetter />
            <BrandLogo />
           
        </>
    )
}
export default HomeComponent;