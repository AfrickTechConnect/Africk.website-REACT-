import React from 'react';
import { Carousel } from "react-responsive-carousel";
import ProductTile from './ProductTile';
import SectionTitle from './Sections/SectionTitle';

function ProductCarousel(props) {
    return (
        <>
            <div className="flex justify-center w-full pt-16 bg-two">
                <SectionTitle title="Our Products"/>
            </div>
            <Carousel 
            
            autoPlay infiniteLoop showIndicators={false}  showThumbs={false} showStatus={false} showArrows={true} 
            >
                <div className="h-full bg-two">
                    <ProductTile 
                        title="Pay for all your services with YankeePay"
                        subtitle="YankeePay is designed to helped
                        you pay for your goods ands services
                        using bitcoin as your primary currency"
                        slideName='africa'
                    />      
                </div>
                <div className="h-full bg-two">
                    <ProductTile 
                        title="Connect to Investors for your small business"
                        subtitle="MerchantX is an application designed to 
                        connect your small business to Investors and also
                        Investors"
                        slideName="merchant"
                    />
                </div>
                <div className="h-full bg-two">
                    <ProductTile 
                        title="Want to know what your Customers think?"
                        subtitle="With Amebo you can get the visibility 
                        you want to understand your customer sentiments
                        to your products and connect directly with your customer
                        base."
                        slideName="amebo"
                    />
                </div>
        
            </Carousel>
            <div className="w-full p-6"></div>
        </>
    );
}

export default ProductCarousel;