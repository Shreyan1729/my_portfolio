import React from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { fadeIn, zoomIn } from "./Elements/Elements";

const Home = () => {
  const socialMedia = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/8801818927655",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/shreyan1729",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/shreyan-dey-567b0b341/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Shreyan1729",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/ShreyanDey1729",
    },
  ];

  return (
    <section id="Home">
      <div className="row">
        <div className="left">
          <h1>
            Hi guys, <br /> I'm Shreyan Dey!
          </h1>
          <p>
            A passionate Full-Stack Developer with a knack for crafting
            scalable, user-friendly, and aesthetically pleasing digital
            solutions. I thrive at the intersection of creativity and
            functionality, leveraging modern technologies to build websites and
            applications that leave a lasting impact.
          </p>
          <div className="icons">
            {socialMedia.map((social, index) => (
              <motion.a
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView={"show"}
                href={social.href}
                target="__blank"
                key={social.href}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          variants={zoomIn(0.1, 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="right"
        >
          <div className="circles">
            <div className="circle"></div>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
