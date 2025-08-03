// const NavbarLogo = () => {
//   return (
//     <div>
//       <h1 className="text-white  text-2xl sm:hidden md:block">
//         SALMAN NAZEER
//       </h1>
//       <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
//         MSN
//       </h1>
//     </div>
//   );
// };

// export default NavbarLogo;
/**
 * NavbarLogo component
 * Shows full name on medium+ screens, initials on small screens.
 */
const NavbarLogo = () => {
  return (
    <div>
      {/* Full name: visible on md and up */}
      <h1 className="hidden md:block text-white text-2xl font-bold">
        SALMAN NAZEER
      </h1>
      {/* Initials: visible on small screens only */}
      <h1 className="block md:hidden text-white font-special font-extrabold text-4xl">
        MSN
      </h1>
    </div>
  );
};

export default NavbarLogo;
