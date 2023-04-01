// import React from "react";

// import Portfolio1 from "../assets/Portfolio1.png";
// // import Portfolio2 from "../assets/Portfolio2.png";


// const Portfolio = () => {
//     const portfolios = 
//         {
//             id: 1,
//             src: Portfolio1
//         }

//         // {
//         //     id: 1,
//         //     src: Portfolio1
//         // }
    
//     return (
//     <div name="portfolio" 
//       className="bg-gradient-to-r from-purple-300 to-blue-600 w-full 
//       text-black md:h-screen">
//         <div className="max-w-screen-lg p-4 mx-auto 
//         flex flex-col justify-center w-full h-full">
            
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4
//           border-blue-500">Portfolio</p>
//             <p className="py-6">Here are some projects I've completed in the past:</p>
//         </div>
//         {
//             portfolios.map(({id, src}) => (
//                 <div key={id} className="grid sm:grid-cols-3 md:grid-cols-3 gap-9
//                 px-13 sm:px-0">
//                    <div className="shadow-md shadow-purple-500 rounded-lg">
//                    <img src={Portfolio1} alt="" className="rounded-md duration-300 hover:scale-105" />
//                    </div>
//                    <div className="flex items-center justify-center">
//                        <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105"></button>
//                        <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105"></button>   
//                    </div>
//                </div>

//             ))
//         }
        
//     </div>
//     </div>
//     )
// }

// export default Portfolio


import Portfolio1 from "../assets/Portfolio1.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Portfolio1,
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Below are some of my completed projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
