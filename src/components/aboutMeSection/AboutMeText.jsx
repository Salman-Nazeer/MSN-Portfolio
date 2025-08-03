// import { Link } from "react-scroll";

// const AboutMeText = () => {
//   return (
//     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
//       <h2 className="text-6xl text-cyan mb-10">About Me</h2>
//       <p>
//         I’m M. Salman Nazeer, a full stack web developer with 1 years of
//         experience in frontend and backend development. I specialize in React,
//         Node.js, and MongoDB, building responsive and scalable web applications.
//         Based in Karachi, I’m open to remote work and love turning ideas into
//         real-world solutions through code. Passionate about learning,
//         problem-solving, and staying up to date with modern web technologies.
//       </p>
//       <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
//         <Link
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-120}
//           to="projects"
//           className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
//         >
//           My Projects
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default AboutMeText;











import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-6">About Me</h2>
      <p className="text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
        I’m M. Salman Nazeer, a full stack web developer with 1 year of
        experience in frontend and backend development. I specialize in React,
        Node.js, and MongoDB, building responsive and scalable web applications.
        Based in Karachi, I’m open to remote work and love turning ideas into
        real-world solutions through code. Passionate about learning,
        problem-solving, and staying up to date with modern web technologies.
      </p>

      <button className="border border-orange rounded-full py-2 px-5 text-base sm:text-lg flex gap-2 items-center mt-8 hover:bg-orange transition-all duration-500 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
