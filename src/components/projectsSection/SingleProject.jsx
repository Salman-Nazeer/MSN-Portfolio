import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full flex-col-reverse md:flex-row items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-start space-y-3">
        <h2
          className={`text-2xl md:text-3xl text-orange font-semibold ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {name}
        </h2>
        <h2
          className={`text-lg font-thin text-white font-special ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Image Section */}
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white block"
        >
          <div className="absolute inset-0 bg-cyan opacity-50 hover:opacity-0 transition-all duration-500 md:block sm:hidden z-10"></div>
          <img
            src={image}
            alt="website image"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleProject;
