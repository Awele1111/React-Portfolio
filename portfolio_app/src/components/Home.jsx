import React from 'react';
// import aboutImage from '../assets/aboutImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black-to-grey-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-5xl sm:text-7xl font-bold">I am a full stack developer</h2>
               
                    <p className="text-grey-600 py-5 max-w-md">I have received training on how to utilize technologies such as React, css libraries such as Tailwind, Node.js and GraphQL.</p>
            
                <div>
                <button className="w-fit px-7 py-4 my-3 flex items-center rounded-md bg-gradient-to-r from-purple-300 to-blue-600">
                    Portfolio 
                    <span>
                    <MdOutlineKeyboardArrowRight/>
                    </span>
                </button>
                    </div>
                </div>
                {/* <div>
                    <img src="{aboutImage}" alt="my profile"  className="rounded-3xl mx-auto w-2/3 md:w-full"/>
                </div> */}
             </div>
        </div>
        
        
    )
    ;
};

export default Home;
