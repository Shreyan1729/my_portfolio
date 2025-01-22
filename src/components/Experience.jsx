import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiVite } from "react-icons/si";

import { motion } from "motion/react";
import { experiences, fadeIn, zoomIn } from "./Elements/Elements";

const Experience = () => {
  const icons = [
    { icon: <FaHtml5 />, url: "https://www.w3schools.com/html/" },
    { icon: <FaCss3 />, url: "https://www.w3schools.com/css/" },
    { icon: <FaBootstrap />, url: "https://getbootstrap.com/" },
    { icon: <FaJsSquare />, url: "https://www.w3schools.com/js/" },
    { icon: <FaReact />, url: "https://react.dev/" },
    { icon: <SiVite />, url: "https://vite.dev/" },
    { icon: <RiTailwindCssFill />, url: "https://tailwindcss.com/" },
    { icon: <FaNodeJs />, url: "https://nodejs.org/en" },
    { icon: <BiLogoTypescript />, url: "https://www.typescriptlang.org/" },
    { icon: <SiMongodb />, url: "https://www.mongodb.com/" },
  ];

  return (
    <section id="experience">
      <h1 className="title">My Experiences</h1>

      <div className="row" style={{ "--quantity": icons.length }}>
        {icons.map((iconDetail, index) => (
          <motion.a
            variants={zoomIn(0.2, `0.${index}`)}
            initial="hidden"
            whileInView={"show"}
            href={iconDetail.url}
            target="__blank"
            key={iconDetail.url}
          >
            {iconDetail.icon}
          </motion.a>
        ))}
      </div>

      <div
        className="grids"
        style={{ "--quantityOfExperience": experiences.length }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView={"show"}
            className="grid"
            key={experience.icon}
          >
            <img src={experience.icon} alt="" />
            <h2>{experience.title}</h2>
            <p>{experience.date}</p>
            <ul>
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
