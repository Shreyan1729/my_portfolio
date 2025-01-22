import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmallNavbar from "./components/SmallNavbar";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <SmallNavbar /> : <Navbar />}

      <div className="App">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
