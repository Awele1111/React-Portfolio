    import React from "react";
    import Portfolio1 from "../assets/Portfolio1.png";
    import Portfolio2 from "../assets/Portfolio2.png";
    import Portfolio3 from "../assets/Portfolio3.png";
    // import Portfolio4 from "../assets/Portfolio4.png"; 
    import Portfolio5 from "../assets/Portfolio5.png";
    import Portfolio6 from "../assets/Portfolio6.png";
    
    const Portfolio = () => {
      const portfolios = [
        {
          id: 1,
          src: Portfolio1,
          demoLink: "https://justincanavanmusic.github.io/music-dashboard/",
          codeLink: "https://github.com/justincanavanmusic/music-dashboard"
        },
        {
          id: 2,
          src: Portfolio2,
          demoLink: "https://awele1111.github.io/Note-taker/",
          codeLink: "https://github.com/Awele1111/Note-taker"
        },
        {
          id: 3,
          src: Portfolio3,
          demoLink: "https://awele1111.github.io/Code-quiz/",
          codeLink: "https://github.com/Awele1111/Code-quiz"
        },
        {
          id: 4,
          src: "https://via.placeholder.com/200",
          demoLink: "https://awele1111.github.io/Code-refactoring/",
          codeLink: "https://github.com/Awele1111/Code-refactoring"
        },
        {
          id: 5,
          src: Portfolio5,
          demoLink: "https://awele1111.github.io/Password-generator/",
          codeLink: "https://github.com/Awele1111/Password-generator"
        },
        {
          id: 6,
          src: Portfolio6,
          demoLink: "https://awele1111.github.io/portfolio/",
          codeLink: "https://github.com/Awele1111/portfolio"
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
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, demoLink, codeLink }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={codeLink} target="_blank" rel="noreferrer">Code</a>
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
     
    
        