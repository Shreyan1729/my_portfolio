import React, { useEffect, useState } from "react";
import SmallNavbar from "./SmallNavbar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Error = () => {
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

      <div className="error">
        <h1>404 Error {isMobile ? <br /> : "|"} Page is not found</h1>

        <p>
          The page you’re trying to access may no longer exist, might have been
          renamed, or is currently unavailable. Please check the URL or try
          again later.
        </p>

        <Link to="/">Back to Home</Link>
      </div>

      <Footer />
    </>
  );
};

export default Error;
