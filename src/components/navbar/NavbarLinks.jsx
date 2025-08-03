import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeMenu()); // ✅ Close the mobile menu
  };
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
            onClick={handleLinkClick} // ✅ Trigger close on click
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
