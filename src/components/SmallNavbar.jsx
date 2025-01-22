import React, { useEffect, useState } from "react";
import { logo } from "../assets/image";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { fadeIn } from "./Elements/Elements";

const SmallNavbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Add or remove overflow-y-hidden class based on the `active` state
    const htmlElement = document.querySelector("html");
    const bodyElement = document.querySelector("body");

    if (active) {
      htmlElement.classList.add("overflow-y-hidden");
      bodyElement.classList.add("overflow-y-hidden");
    } else {
      htmlElement.classList.remove("overflow-y-hidden");
      bodyElement.classList.remove("overflow-y-hidden");
    }

    // Cleanup to avoid issues when the component unmounts
    return () => {
      htmlElement.classList.remove("overflow-y-hidden");
      bodyElement.classList.remove("overflow-y-hidden");
    };
  }, [active]);

  return (
    <>
      {active && (
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="small-navbar-main"
        >
          <nav>
            <ul>
              <li>
                <a href="#home" onClick={() => setActive(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setActive(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setActive(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setActive(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setActive(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}

      <header id="SmallNavbar">
        <div className="logo">
          <img src={logo} alt="Shreyan Dey Logo" />
          <span>Shreyan Dey</span>
        </div>

        {active ? (
          <ImCross
            className="icon cross"
            onClick={() => setActive(false)}
            aria-label="Close menu"
            role="button"
          />
        ) : (
          <TiThMenu
            className="icon menu"
            style={{ opacity: 0 }}
            onClick={() => setActive(true)}
            aria-label="Open menu"
            role="button"
          />
        )}
      </header>
    </>
  );
};

export default SmallNavbar;
