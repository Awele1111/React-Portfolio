// import React from "react";


// const Aboutpage = () => {
//     return (
//     // <div name="aboutpage" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"> 
//   <div 
//     name="aboutpage" 
//     className="w-full h-screen bg-black text-white"> 
//         {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
//         justify-center w-full h-full"> */}
//         <div className="  mx-auto flex flex-col 
//         justify-center">
//            <div className="pb-6">
//                     <p className="text-5xl font-bold inline border-b-5 border-purple-400">About</p>
//            </div> 
           
//         </div>
//         <p className="text-xl  mt-22">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//             Neque natus ea sapiente voluptatibus quo alias mollitia similique, 
//             magnam voluptatem ratione a, velit eveniet aliquid accusantium dolor, 
//             placeat quas asperiores nobis.
//         </p>
//          <br/>
//          <p  className="text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//             Deserunt expedita laboriosam rem odio blanditiis quae labore ex aspernatur quod 
//             dolores id harum fuga natus magnam, adipisci earum facere, ad tenetur!
//          </p>
//     </div>
//     )
// }
// export default Aboutpage;


import React from "react";
import aboutImage from "../assets/aboutImage.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

    
        <p className="text-white py-4 max-w-md">
          I am a software devloper with experience on how to utilize technologies 
          such as React, Node.js, GraphQL, CSS libraries such Tailwind, materialize and others. I am located in chicago, Illionois and I graduated from Northwestern Coding Bootcamp. I love to learn more about coding in my spare time.
         </p>
         {/* <img
            src={aboutImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full cursor-pointer"
          /> */}
          {/* <div>
          
          
          <img
    src={aboutImage}
    alt="my profile"
    className="rounded-full mx-auto w-48 h-48 object-cover object-center"
    style={{ borderRadius: '50%' }}
  />
        </div> */}
        {/* <div className="text-right">
  <img
    src={aboutImage}
    alt="my profile"
    className="rounded-2xl mx-auto w-2/3 md:w-1/2 lg:w-1/3 cursor-pointer ml-auto mr-0 mt-4"
    style={{ marginLeft: "2rem" }}
  />
</div> */}
<div className="float-right mr-2">
  <img
    src={aboutImage}
    alt="my profile"
    className="rounded-full mx-auto w-39 md:w-50 cursor-pointer"
  />
</div>



        </div>
    
      </div>
      
    
  );
};

export default About;
