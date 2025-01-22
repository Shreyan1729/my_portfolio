import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "./Elements/Elements";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_insc9qz";
const TEMPLATE_ID = "template_nu4crvf";
const PUBLIC_KEY = "esEyqC79vVMGcwhKK";

const Contact = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("Message sent successfully! We will contact you soon.");
        form.current.reset();
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Message failed to send. Please try again later.");
      }
    );
  };

  return (
    <section id="contact">
      <motion.h1
        variants={zoomIn(0, 0.4)}
        initial="hidden"
        whileInView={"show"}
        className="title"
      >
        Contact Me
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView={"show"}
        className="sub-title"
      >
        Feel free to reach out to discuss my projects, skills, and experience.
        My work highlights real-world examples of problem-solving, collaboration
        with various technologies, and effective project management. Check out
        the provided links for code repositories and live demos.
      </motion.p>

      <div className="row">
        <motion.form
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          ref={form}
          onSubmit={handleSend}
        >
          <div className="input">
            <input type="text" name="from_name" id="name" required />
            <label htmlFor="name">Your Name:</label>
          </div>
          <div className="input">
            <input type="email" name="from_email" id="email" required />
            <label htmlFor="email">Your Email Address:</label>
          </div>
          <div className="input">
            <textarea name="message" id="message" required></textarea>
            <label htmlFor="message">Your Message:</label>
          </div>

          <button type="submit">Send Message</button>
        </motion.form>

        <motion.iframe
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          className="right"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579684444755!2d91.82080666560427!3d22.366401174203332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd888c5ce967f%3A0x7a943c9c0b93d2fa!2sZaman%20Bhaban%2C%20Hajee%20Nur%20Ahmed%20Road%2C%20Chittagong%204000!5e0!3m2!1sen!2sbd!4v1734108810404!5m2!1sen!2sbd"
          height="450"
          width="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>
    </section>
  );
};

export default Contact;
