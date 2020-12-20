import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../LandingPageComponents/Sections/SectionTitle';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useFormValidation } from '../hooks'

const Input = styled.input`
    &:focus {
        outline: none
    }
    
`
const TextArea = styled.textarea`
    &:focus {
        outline: none
    }

`

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
}

function ContactUs() {
    const { handleChange, handleSubmit } = useFormValidation(INITIAL_STATE);
    return (
        <div  className="header px-10 md:px-0 py-10">
            <div className="flex justify-center pb-10">
                <SectionTitle title="Send a Message 😀" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="grid  grid-cols-2 gap-x-3">
                        <div className="flex flex-col">
                            <label className="leading-7 font-bold text-xl mb-3">First Name</label>
                            <Input 
                            onChange={handleChange}
                            name="firstName"
                            autoComplete={false}
                            className="bg-two rounded-md h-12 sm:w-full md:w-80 pl-4" type="text" />    
                        </div>
                        <div className="flex flex-col w-full  md:mt-0">
                            <label className="leading-7 font-bold text-xl mb-3">Last Name</label>
                                <Input 
                                onChange={handleChange}
                                autoComplete={false}
                                name="lastName"
                                className="bg-two h-12 sm:w-0 md:w-80 rounded-md pl-4" type="text" />
                        </div> 
                        <div className="flex flex-wrap flex-col mt-8 col-span-2">
                                <label className="leading-7 font-bold text-xl mb-3">Email<i className="pl-2 text-sm">(optional)</i></label>
                                <Input 
                                onChange={handleChange}
                                autoComplete={false}
                                name="email"
                                className="bg-two rounded-md h-12  pl-4" type="email" />    
                        </div>
                        <div className="flex flex-wrap flex-col mt-8 col-span-2">
                            <label className="leading-7 font-bold text-xl mb-3">Phone Number<i  className="pl-2 text-sm">(optional)</i></label>
                            <Input 
                            onChange={handleChange}
                            autoComplete={false}
                            name="phoneNumber"
                            className="bg-two rounded-md h-12  pl-4" type="number" />    
                        </div>
                        <div className="flex flex-wrap flex-col mt-8 col-span-2">
                            <label className="leading-7 font-bold text-xl mb-3">Message</label>
                            <TextArea 
                            onChange={handleChange}
                            autoComplete={false}
                            name="message"
                            className="bg-two rounded-md  pl-4 pt-2" rows={4} >  </TextArea>
                        </div>
                        <div className="mt-5 col-span-2">
                            <button type="submit" className="bg-afrkgreen py-5 px-10 text-xl rounded-md text-white font-bold w-full">
                                <span className="inline-flex">
                                    <span >Send Message</span> 
                                    <FaRegPaperPlane className="ml-2 mt-1" />
                                </span>
                                </button>
                        </div>
                    </div>

                </div>
                
            </form>
        </div>
    );
}

export default ContactUs;
                    