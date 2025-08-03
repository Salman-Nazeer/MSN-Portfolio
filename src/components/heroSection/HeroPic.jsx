// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { PiHexagonThin } from "react-icons/pi";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//       className=" h-full flex items-center justify-center "
//     >
//       <img
//         src="../../public/images/profile.png"
//         alt="M. Salman Nazeer"
//         className="max-h-[420px] w-auto"
//       />

//       <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
//         <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;




import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full md:w-1/2 relative flex items-center justify-center"
    >
      {/* Profile Image */}
      <img
        src="/images/profile.png"
        alt="M. Salman Nazeer"
        className="max-h-[400px] w-auto z-10 object-contain"
      />

      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <PiHexagonThin className="h-[400px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
