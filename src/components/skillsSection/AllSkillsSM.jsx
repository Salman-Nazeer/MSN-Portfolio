import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import skills from "./Skills";

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center text-center"
        >
          <item.icon className="text-6xl sm:text-7xl text-orange" />
          <p className="text-white mt-2 sm:mt-4 text-sm sm:text-base">
            {item.skill}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
