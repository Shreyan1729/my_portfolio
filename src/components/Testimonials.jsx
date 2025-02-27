import React from "react";
import { fadeIn, testimonials } from "./Elements/Elements";
import { FaQuoteLeft } from "react-icons/fa6";
import useMousePosition from "./Elements/useMousePosition";

import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <p className="what">What my friends say about me</p>
      <h1>Testimonials</h1>
      <main style={{ "--quantityOfTestimonials": testimonials.length }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView={"show"}
            className="testimonial"
            key={testimonial.href}
          >
            <FaQuoteLeft className="icon" />
            <div className="main">
              <p>{testimonial.testimonial}</p>
              <a href={testimonial.href} target="__blank">
                {testimonial.name}
                <span>{`(${testimonial.designation})`}</span>
              </a>
            </div>{" "}
          </motion.div>
        ))}
      </main>

      <div className="background-color"></div>
    </section>
  );
};

export default Testimonials;
