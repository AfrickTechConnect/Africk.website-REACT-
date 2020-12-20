import React from 'react';
import Africa  from '../../assets/africa.png'
import Merchant from '../../assets/merchantx.PNG';
import Amebo from '../../assets/amebo.png'
import '../../styles/App.css';
function ProductTile({title, subtitle, slideName}) {
    const images = {
        'africa': Africa,
        'merchant': Merchant,
        'amebo': Amebo
    }
    return (
        < >
            <div className="flex justify-between w-full">
            <div className=" mt-6 md:mt-28 flex flex-col  items-center  pr-14 md:pr-0 mb-10 h-full md:ml-60 ml-14">
                <span className="font-bold text-2xl pt-4 md:w-80">
                    {title}
                </span>
                <span className="font-normal mt-4 md:w-80"> 
                    {subtitle} 
                </span>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center md:justify-center h-96 w-96 rounded-full md:mr-64">
                <img src={images[slideName]}   />
            </div>
        </div>
        </>
    );
}

export default ProductTile;