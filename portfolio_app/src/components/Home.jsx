// import React from 'react';
// import aboutImage from '../assets/aboutImage.jpg';
// import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

// const Home = () => {
//     return (
//         <div name="home" className="h-screen w-full bg-gradient-to-b from-black-to-grey-800">
//             <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//                 <div className="flex flex-col justify-center h-full">
//                     <h2 className="text-5xl sm:text-7xl font-bold">I am a full stack developer</h2>
               
//                     <p className="text-grey-600 py-5 max-w-md"></p>
            
//                 <div>
//                 <button className="w-fit px-7 py-4 my-3 flex items-center rounded-md bg-gradient-to-r from-purple-300 to-blue-600 cursor-pointer">
//                     Portfolio 
//                     <span className="hover:rotate-90 duration-400">
//                     <MdOutlineKeyboardArrowRight size={30} className="ml-2"/>
//                     </span>
//                 </button>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={aboutImage} alt="my profile"  className="rounded-3xl mx-auto w-2/3 md:w-full"/>
//                 </div>
//              </div>
//         </div>
        
        
//     )
//     ;
// };

// export default Home;


import React from "react";
import aboutImage from "../assets/aboutImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-600"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Hello, I'm Awele Anita Lan and I am a Full Stack Developer
          </h2>
          

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={aboutImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
