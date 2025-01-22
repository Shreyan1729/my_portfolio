import React from "react";
import { fadeIn } from "./Elements/Elements";
import { motion } from "motion/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.section
      variants={fadeIn("down", 0)}
      initial="hidden"
      whileInView={"show"}
      id="Footer"
    >
      <p style={{ textAlign: "center" }}>
        Copyright © Shreyan Dey. All rights reserved {year}.
      </p>
    </motion.section>
  );
};

export default Footer;
