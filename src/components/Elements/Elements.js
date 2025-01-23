import My_Mathematics from "./My_Mathematics.png";
import Periodic_table from "./Periodic_Table.png";
import My_Coaching from "./My_Coaching.png";

import fullStack from "./fullStake.png";
import React from "./react.png";
import webDevelopment from "./webDevelopment.png";

import computer from "./computer.png";

export { computer };

export const ProjectDetails = [
  {
    name: "MyCoaching",
    img: My_Coaching,
    url: "https://my-coaching.vercel.app",
    description:
      "A demo educational platform, MyCoaching, designed to streamline learning and management for modern coaching centers.",
    frameWorks: ["React", "Mongodb", "ParticlesJS"],
  },
  {
    name: "My_Mathematics",
    img: My_Mathematics,
    // url: "https://my-mathematics.vercel.app",
    url: null,
    description:
      "An educational website, My_Mathematics, designed to help students prepare effectively for Math Olympiad competitions.",
    frameWorks: ["Vite", "Mongodb", "Slick CSS", "Framer Motion"],
  },
  {
    name: "Periodic_Table",
    img: Periodic_table,
    url: "https://periodic-table-ebon.vercel.app",
    description:
      "A web application that provides an interactive and visually appealing periodic table. Designed for students, teachers, and chemistry enthusiasts to explore element properties, atomic structure, and more.",
    frameWorks: ["Vite", "Tailwind CSS", "Framer Motion"],
  },
];

export const experiences = [
  {
    title: "Web Developer",
    icon: webDevelopment,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Aiding in the advancement and maintenance of web applications built in React.js and its related technologies.",
      "Implementing responsive design best practices while also addressing cross-browser issues.",
      "Conducting code reviews and providing constructive feedback on fellow developers’ codes.",
    ],
  },
  {
    title: "React.js Developer",
    icon: React,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: fullStack,
    iconBg: "#050816",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Once Sheryan improved his site, the traffic shot up by fifty percent. We are ever so grateful to them!",
    name: "Sajid Ul Bari",
    designation: "Full Stack Web Developer",
    href: "https://sazidfullstack.vercel.app/",
  },
  {
    testimonial:
      "Creating a website as stunning as our product seemed to be impossible. However, Shreyan was able to defy my expectations.",
    name: "Rezaul Islam",
    designation: "Fronted Web Developer",
    href: "#",
  },
  {
    testimonial:
      "Shreyan cares about the success of his clients more than any other web developer I have met in my life.",
    name: "Shimanto Kumar Mondol",
    designation: "Django developer",
    href: "https://shimanto-port.onrender.com/",
  },
];

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
