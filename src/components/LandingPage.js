import React from 'react';
import  ProductCarousel  from '../components/LandingPageComponents/ProductCarousel';
import FirstSection from './LandingPageComponents/Sections/FirstSection';
import Footer from '../components/LandingPageComponents/Footer';
import SecondSection from './LandingPageComponents/Sections/SecondSection';
import BlogSection from './LandingPageComponents/Sections/BlogSection';

function HomePage({}) {
    return (
        <>
          <FirstSection />
          <SecondSection />
          <ProductCarousel />
          <BlogSection />
        </>
    );
}

export default HomePage;