import React from 'react';
import GirlImage from '../../../assets/hot_chick.png'
import CustomBtn from '../CustomBtn';
import { GoToMail }  from '../../reusables';

function FirstSection() {
    return (
        <div className="header flex justify-between pt-8">
            <div className="flex flex-col pt-16  pb-32 px-6 md:py-0  md:px-36 justify-center  md:mb-0">
                  <div className="text-5xl font-bold mb-4 md:mb-0 ">
                      Solving societal problems<br />
                      through human-centred innovation.
                  </div>
                  <span className="mt-6 font-medium text-lg">
                      We create awesome proucts centered
                      at solving  everyday African problems
                  </span>
                  <div className="flex space-y-3 md:space-y-0 flex-col md:flex-row  mt-4 md:mt-10 md:space-x-3 mb-10">
                        <CustomBtn buttonName="Request Demo" buttonType="primary" buttonAction={() => GoToMail("Demo Request For Africk Technology") }/>
                        <CustomBtn  buttonName="Get in Touch" buttonType="secondary" buttonAction={() => GoToMail("New Communication For Africk Technology")} />
                 </div>
            </div>
            <div className="hidden md:flex  md:pr-16">
                <img  className=" hidden md:block" src={GirlImage} height={450} width={450}/>
            </div>
            

        </div>
    );
}

export default FirstSection;