import React from "react";
import { logo } from "../assets/image";

const Navbar = () => {
  const links = [
    { name: "Home" },
    { name: "Projects" },
    { name: "Experiences" },
    { name: "Testimonials" },
    { name: "Contact us" },
  ];

  return (
    <section id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        Shreyan Dey
      </div>

      <ul className="links">
        {links.map((link) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
