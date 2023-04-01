// import React from "react";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// const Socials = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn<FaLinkedinIn size={40} />
//         </>
//       ),
//       href: 'https://linkedin.com',
//       style: 'rounded-tr-md'
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub<FaGithub size={40} />
//         </>
//       ),
//       href: 'https://github.com/awele1111',
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Email<HiOutlineMail size={40} />
//         </>
//       ),
//       href: 'mailto:awelelan@gmail.com',
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Resume<BsFillPersonLinesFill size={40} />
//         </>
//       ),
//       href: '/resume.pdf',
//       style: 'rounded-br-md',
//       download: true,
//     },
//   ];

//   return (
//     <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
//       <ul>
//         {links.map(({ id, child, href, style, download }) => (
//           <li
//             key={id}
//             className={
//               "flex justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-280 bg-purple-500" +
//               " " +
//               style
//             }
//           >
//             <a
//               href={href}
//               className="flex justify-between items-center w-full text-black"
//               download={download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Socials;


import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={40} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40} />
        </>
      ),
      href: "https://github.com/awele1111",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:awelelan@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[55%] left-2 fixed bg-gradient-to-r from-purple-400 to-blue-500 cursor-pointer"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-550" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;

