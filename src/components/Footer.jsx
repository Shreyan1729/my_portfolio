import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section id="Footer">
      <p style={{ textAlign: "center" }}>
        Copyright © Shreyan Dey. All rights reserved {year}.
      </p>
    </section>
  );
};

export default Footer;
