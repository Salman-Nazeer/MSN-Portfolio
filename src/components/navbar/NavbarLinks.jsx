// import { Link } from "react-scroll";

// const links = [
//   { link: "About Me", section: "about" },
//   { link: "Skills", section: "skills" },
//   { link: "Experience", section: "experience" },
//   { link: "Projects", section: "projects" },
//   { link: "Contact", section: "contact" },
// ];

// const NavbarLinks = () => {
//   return (
//     <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
//       {links.map((link, index) => {
//         return (
//           <li key={index} className="group">
//             <Link
//               spy={true}
//               smooth={true}
//               duration={500}
//               offset={-130}
//               to={link.section}
//               className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
//             >
//               {link.link}
//             </Link>
//             <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavbarLinks;

import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

/**
 * NavbarLinks component
 * Renders navigation links, responsive for mobile and desktop.
 */
const NavbarLinks = () => {
  return (
    <ul
      className="
      
        flex flex-col lg:flex-row
        gap-4 lg:gap-6
        text-white font-body
        items-center justify-center
        lg:static lg:bg-black lg:py-0
        bg-cyan/30 backdrop-blur-lg py-4 w-full
        rounded-b-xl
        text-lg lg:text-md
        transition-all duration-300
      "
    >
      {/* Map through links array and render each link */}
      {links.map((link, index) => (
        <li key={index} className="group w-full lg:w-auto">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            className="
              block w-full text-center
              cursor-pointer text-white
              hover:text-cyan transition-all duration-500
              px-2 py-2
            "
            tabIndex={0}
          >
            {link.link}
          </Link>
          {/* Underline effect on hover */}
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
