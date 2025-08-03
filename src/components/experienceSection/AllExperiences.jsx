import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Markey Tech",
    date: "July 2024 - January 2025",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Web Developer",
    company: "Freelance",
    date: "2023 - Present",
    responsibilities: [
      "Teach core web development concepts clearly.",
      "Build responsive MERN stack apps with great UI/UX.",
      "Integrate APIs and manage state via Redux/Context.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Personal Projects",
    date: "Ongoing",
    responsibilities: [
      "Built & deployed an orrery app, e-commerce site & task manager",
      "Used React, Tailwind, Node.js & MongoDB.",
      "Focused on caching, deployment & performance optimization.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6  ">
      {/* <div className="flex md:flex-row sm:flex-col items-center justify-between"> */}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mx-auto md:flex-row sm:flex-col justify-between"
        >
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:block "
            >
              <FaArrowRightLong className="text-6xl text-orange" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
