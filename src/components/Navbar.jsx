import React from "react";
import { logo } from "../assets/image";

const Navbar = () => {
  const links = [
    { name: "Home", link: "#Home" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experience" },
    { name: "Testimonials", link: "#Testimonials" },
    { name: "Contact us", link: "#contact" },
  ];

  return (
    <section id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        Shreyan | Web Developer
      </div>

      <ul className="links">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
