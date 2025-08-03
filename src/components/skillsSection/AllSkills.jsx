import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import skills from "./Skills";

const AllSkills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
