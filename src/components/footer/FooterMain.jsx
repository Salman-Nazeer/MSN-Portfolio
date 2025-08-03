import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    // <div className="px-4">
    //   <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
    //   <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
    //     <p className="text-3xl text-lightGrey ">Muhammad Salman Nazeer</p>
    //     <ul className="flex gap-4 text-lightGrey text-xl">
    //       {footerLinks.map((item, index) => {
    //         return (
    //           <li key={index}>
    //             <Link
    //               spy={true}
    //               smooth={true}
    //               duration={500}
    //               offset={-120}
    //               to={item.section}
    //               className="hover:text-white transition-all duration-500 cursor-pointer"
    //             >
    //               {item.name}
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
    //     © 2024 M.Salman Nazeer | All Rights Reserved.
    //   </p>
    // </div>

    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 mt-4 max-w-[1200px] mx-auto text-center md:text-left">
        <p className="text-2xl sm:text-xl text-lightGrey">
          Muhammad Salman Nazeer
        </p>

        <ul className="sm:flex flex-wrap justify-center gap-4 text-lightGrey text-lg sm:text-base hidden">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-sm text-lightBrown">
        © 2024 M. Salman Nazeer | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
