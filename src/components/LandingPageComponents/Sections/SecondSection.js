import React from 'react';
import SectionTitle from './SectionTitle';

function SecondSection(props) {
    return (
        <div  className="bg-one ">
            <div className="text-center py-24">
                <div className="flex justify-center w-full">
                    <SectionTitle title="Our Focus" />
                </div>
                <div className="text-4xl mt-3 font-extrabold flex flex-wrap justify-center px-2 md:px-0">
                    We are solving problems<br/>
                    in these areas.
                </div>
                <div className="block md:grid md:grid-cols-3 md:gap-x-10 px-10 md:px-36 mt-8 x">
                    <div className="flex flex-col items-center mt-6">
                        <svg className="w-6 h-6 mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                        <h1 className="font-bold text-blue-400">Financial inclusion </h1>
                        <span className="w-80">Innovative Financial inclusion by leveraging disruptive innovation models across all customer segments</span>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <svg className="w-6 h-6 mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        <h1 className="font-bold text-purple-400">Education</h1>
                        <span className='w-80'>Innovative education and learning  platform that amplifies diversity , equity and inclusion by leveraging artificial intelligence and machine learning algorithms.</span>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <svg className="w-6 h-6 mb-2  text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <h1 className="font-bold text-green-400">Agriculture</h1>
                        <span className='w-80'>Innovative agricultural technologies using precision farming and automated control</span>
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        <svg className="w-6 h-6 mb-2  text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <h1 className="font-bold text-red-400">IOT</h1>
                        <span className='w-80'>Innovative IOT with blockchain | AI | Data analytics | Hardware and firmware programming solutions</span>
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        <svg className="w-6 h-6 mb-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        <h1 className="font-bold text-yellow-400">Retail</h1>
                        <span className='w-80'>Innovative multi-tenant | Mobile and web-based eCommerce solution</span>
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        <svg className="w-6 h-6 mb-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                        <h1 className="font-bold text-indigo-400">Lifestyle</h1>
                        <span className='w-80'>Innovative lifestyle products that helps customers make the best decisions using artificial intelligence and machine learning </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;