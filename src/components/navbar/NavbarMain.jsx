import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";


const NavbarMain = () => {
  // Get menu open state from Redux
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    // Navbar container: fixed, centered, responsive padding
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-2 mt-2">
      {/* Main navbar content: logo, links, button */}
      <div className="flex justify-between items-center w-full bg-black p-4 sm:p-6 rounded-full border-orange border-[0.5px]">
        {/* Logo: shows full name on desktop, initials on mobile */}
        <NavbarLogo />

        {/* Links: visible on desktop, toggled on mobile */}
        <div
          className={`${menuOpen ? "block" : "hidden"} lg:block
          } absolute lg:static top-full left-0 w-full lg:w-auto bg-black sm:bg-transparent rounded-b-xl transition-all duration-300`}
        >
          <NavbarLinks />
        </div>

        {/* Hire Me button: always visible */}
        <NavbarBtn />

        {/* Hamburger toggler: visible only on mobile */}
        <div className="lg:hidden sm:block ml-2">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
