// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const SingleExperience = ({ experience }) => {
//   return (
//     <motion.div
//       variants={fadeIn("right", 0)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.7 }}
//       className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
//     >
//       <p className="font-bold text-cyan">{experience.job}</p>
//       <p className="text-orange">{experience.company}</p>
//       <p className="text-lightGrey">{experience.date}</p>
//       <ul className="list-disc mt-4 pl-4">
//         {experience.responsibilities.map((resp, index) => {
//           return <li key={index}>{resp}</li>;
//         })}
//       </ul>
//     </motion.div>
//   );
// };

// export default SingleExperience;

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full max-w-[300px] sm:max-w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-cyan text-lg">{experience.job}</p>
      <p className="text-orange font-medium">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-5 space-y-1 text-sm">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
