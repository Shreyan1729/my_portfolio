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
        {icons.map((iconDetail) => (
          <a href={iconDetail.url} target="__blank" key={iconDetail.url}>
            {iconDetail.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
