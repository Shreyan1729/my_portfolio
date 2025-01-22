import React from "react";
import { logo } from "../assets/image";
import { TiThMenu } from "react-icons/ti";

const SmallNavbar = () => {
  return (
    <section id="SmallNavbar">
      <div className="logo">
        <img src={logo} alt="" />
        Shreyan Dey
      </div>

      <TiThMenu className="menu" />
    </section>
  );
};

export default SmallNavbar;
