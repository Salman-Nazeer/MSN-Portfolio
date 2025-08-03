// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const HeroText = () => {
//   return (
//     <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
//       <motion.h2
//         variants={fadeIn("down", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
//       >
//         MERN Stack Developer
//       </motion.h2>
//       <motion.h1
//         variants={fadeIn("right", 0.4)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
//       >
//         Muhammad Salman <br className="sm:hidden md:block" />
//         Nazeer
//       </motion.h1>
//       <motion.p
//         variants={fadeIn("up", 0.6)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="text-lg mt-4"
//       >
//         A Passionate MERN Stack Developer  <br /> with 1 years of
//         experience.
//       </motion.p>
//     </div>
//   );
// };

// export default HeroText;

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl md:text-2xl uppercase text-lightGrey"
      >
        MERN Stack Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange font-bold uppercase"
      >
        Muhammad Salman <br className="hidden md:block" />
        Nazeer
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base md:text-lg mt-4 text-white"
      >
        A Passionate MERN Stack Developer <br /> with 1 year of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
