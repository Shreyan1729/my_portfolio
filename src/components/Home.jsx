import React from "react";

const Home = () => {
  return (
    <section id="Home">
      <div className="row">
        <div className="left">
          <h1>
            Hi guys <br /> I'm Shreyan Dey!
          </h1>
          <p>
            A passionate Full-Stack Developer with a knack for crafting
            scalable, user-friendly, and aesthetically pleasing digital
            solutions. I thrive at the intersection of creativity and
            functionality, leveraging modern technologies to build websites and
            applications that leave a lasting impact.
          </p>
          <div className="icons"></div>
        </div>

        <div className="right">
          <div className="circles">
            <div className="circle"></div>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
