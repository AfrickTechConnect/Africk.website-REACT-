import React, { useState, useEffect } from 'react';
import Card from '../../Card';
import CustomBtn from '../CustomBtn';
import SectionTitle from './SectionTitle';
import WeWorking from '../../../assets/we_working.png';

function BlogSection(props) {
    const [data, setData] = useState([]);

    const getData = (data) => {
        setData([...data])
    }
    return (
        <div className="py-24 bg-one">
             <div className="flex justify-center w-full">
                    <SectionTitle title="Our Blog" />
            </div>
            
            { data.length !== 0 ?
                <> 
                     <div className="flex flex-wrap justify-center  py-8">
                        <Card />
                        <Card />
                        <Card />

                    </div>
                    <div className="flex justify-center">
                        <CustomBtn buttonName="View More" buttonType="tetriary" buttonAction={() => console.log('works')} />

                    </div>
                </> :
                <div className="flex justify-center w-full md:mt-8"> 
                    <div className="flex  md:flex-nowrap flex-col ">
                        <div className="md:mb-5 flex justify-center">
                            <img src={WeWorking} className="md:h-96 h-64"/>
                        </div>
                        <h3 className="hidden md:block text-4xl font-normal">
                            No Posts Right now. We are working on it😯
                        </h3>
                        <h3 className="block md:hidden text-2xl md:text-4xl font-normal ml-3">
                            We are working on it!
                        </h3>
                    </div>       
                </div>
           
            }
        </div>
    );
}

export default BlogSection;