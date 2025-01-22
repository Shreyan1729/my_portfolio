import React from "react";
import { motion } from "motion/react";
import { fadeIn, zoomIn } from "./Elements/Elements";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h1
        className="about-heading"
        variants={zoomIn(0, 0.4)}
        initial="hidden"
        whileInView={"show"}
      >
        About Me
      </motion.h1>
      <motion.p
        variants={fadeIn("up", `0`)}
        initial="hidden"
        whileInView={"show"}
        className="about-description"
      >
        A passionate Full-Stack Developer with a knack for crafting scalable,
        user-friendly, and aesthetically pleasing digital solutions. I thrive at
        the intersection of creativity and functionality, leveraging modern
        technologies to build websites and applications that leave a lasting
        impact.
      </motion.p>

      <motion.div
        className="about-content"
        variants={fadeIn("right", `0`)}
        initial="hidden"
        whileInView={"show"}
      >
        <h2 className="about-subheading">What I Bring to the Table</h2>
        <ul className="about-list">
          <li>
            <strong>Expertise in Modern Tech Stacks:</strong> Proficient in
            technologies like React, Next.js, Node.js, Express, TailwindCSS, and
            always eager to adopt the latest tools and frameworks.
          </li>
          <li>
            <strong>A Problem-Solver Mindset:</strong> I approach challenges
            with a logical, analytical lens, aiming to build elegant solutions
            for complex problems.
          </li>
          <li>
            <strong>Commitment to Excellence:</strong> Clean, maintainable, and
            performant code is my standard, following principles like DRY,
            modularity, and scalability.
          </li>
          <li>
            <strong>Continuous Learning:</strong> I stay on the cutting edge of
            technology trends, ensuring that my skills and solutions remain
            relevant in the fast-evolving tech industry.
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn("left", `0`)}
        initial="hidden"
        whileInView={"show"}
        className="about-principles"
      >
        <h2 className="about-subheading">Key Principles I Follow</h2>
        <ul className="principles-list">
          <li>
            <strong>User-Centric Design:</strong> Prioritizing seamless
            experiences and intuitive interfaces for end-users.
          </li>
          <li>
            <strong>Scalability:</strong> Building future-proof systems that
            adapt and grow with user needs.
          </li>
          <li>
            <strong>Collaboration:</strong> Working closely with clients and
            teams to deliver tailored solutions that meet business goals.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
