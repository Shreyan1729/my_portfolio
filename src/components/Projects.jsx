import React from "react";
import { ProjectDetails } from "./Elements/Elements";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title">All of my Projects</h1>
      <p className="sub-title">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <main style={{ "--quantity": ProjectDetails.length }}>
        {ProjectDetails.map((project) => (
          <div className="project" key={project.url}>
            <div className="img-div">
              <a href={project.url} target="__blank">
                <FaArrowLeft className="left" />
              </a>
              <a
                className="github"
                href={`https://github.com/Shreyan1729/`}
                target="__blank"
              >
                <FaGithub />
              </a>
              <img src={project.img} alt="" />
            </div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul>
              {project.frameWorks.map((frameWork) => (
                <li key={frameWork} className={frameWork}>
                  {frameWork}
                </li>
              ))}
            </ul>
            {/* <iframe
              title="Wikipedia Page"
              src={project.url}
              frameBorder="0"
              scrolling="yes"
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></iframe> */}
          </div>
        ))}
      </main>
    </section>
  );
};

export default Projects;
