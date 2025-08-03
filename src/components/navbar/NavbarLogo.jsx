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
