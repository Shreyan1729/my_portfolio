import React from "react";

const Contact = () => {
  const handelSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <p className="sub-title">
        Feel free to reach out to discuss my projects, skills, and experience.
        My work highlights real-world examples of problem-solving, collaboration
        with various technologies, and effective project management. Check out
        the provided links for code repositories and live demos.
      </p>

      <div className="row">
        <form>
          <div className="input">
            <input type="text" required />
            <label htmlFor="input">Your Name:</label>
          </div>
          <div className="input">
            <input type="email" required />
            <label htmlFor="input">Your Email Address:</label>
          </div>
          <div className="input">
            <textarea type="text" required></textarea>
            <label htmlFor="input">Your Message</label>
          </div>

          <button type="submit" onSubmit={handelSubmit}>
            Send Message
          </button>
        </form>

        <iframe
          className="right"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579684444755!2d91.82080666560427!3d22.366401174203332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd888c5ce967f%3A0x7a943c9c0b93d2fa!2sZaman%20Bhaban%2C%20Hajee%20Nur%20Ahmed%20Road%2C%20Chittagong%204000!5e0!3m2!1sen!2sbd!4v1734108810404!5m2!1sen!2sbd"
          height="450"
          width="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
