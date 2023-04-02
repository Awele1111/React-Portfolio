// import React from 'react';

// function Footer() {
//   return (
//     <footer>
//       <p>This is my footer</p>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';

// function Footer() {
//   const links = [
//     {
//       title: 'linkedIN',
//       url: '"https://linkedin.com"'
//     },
//     {
//       title: 'About',
//       url: '/about'
//     },
//     {
//       title: 'Contact',
//       url: '/contact'
//     }
//   ];

//   return (
//     <footer>
//       <nav>
//         <ul>
//           {links.map(link => (
//             <li key={link.title}>
//               <a href={link.url}>{link.title}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
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
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-400 to-blue-500">
      <ul className="flex justify-center items-center h-16">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-2 mr-2 hover:ml-0 hover:rounded-md duration-300 bg-purple-550" +
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

export default Footer;
