import React from 'react';
import CustomBtn from './CustomBtn';
import { GoToMail }  from '../reusables';


function Footer(props) {
    return (
        <footer className="bg-two mt-10 mb-10" >
            <h2 className="text-center font-bold text-2xl">Get in Touch with Us.</h2>
            <div className="flex flex-wrap justify-center mt-4 space-x-3 space-y-3 md:space-y-0">
                <CustomBtn buttonName="Request Demo" buttonType="primary" buttonAction={() => GoToMail("Demo Request For Africk Technology")} />
                <CustomBtn buttonName="Get in Touch" buttonType="secondary" buttonAction={() => GoToMail("New Communication For Africk Technology")} />
            </div>
        </footer>
    );
}

export default Footer;