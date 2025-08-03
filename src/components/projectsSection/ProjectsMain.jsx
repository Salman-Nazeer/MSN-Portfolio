import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "E-ShopMart - A Full-Stack E-Commerce",
    year: "Mar2022",
    align: "right",
    image: "/images/full-stack.png",
    link: "https://e-shopmart.vercel.app",
  },
  {
    name: "Dynamic & Responsive Recipe App Using APIs",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/recipe.png",
    link: "https://recipe-app-8a0a7.web.app",
  },
  {
    name: "Futuristic AI-Powered Web App",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/gpt-ai.png",
    link: "https://gpt-3-77d64.web.app",
  },
  {
    name: "To-Do App",
    year: "May2024",
    align: "left",
    image: "../../public/images/todo.png",
    link: "https://todo-app-97e46.web.app",
  },
  {
    name: "Foodie – Delicious Meals Delivered Fresh",
    year: "May2024",
    align: "right",
    image: "../../public/images/cooking.png",
    link: "https://restaurant-website-d7141.web.app",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
