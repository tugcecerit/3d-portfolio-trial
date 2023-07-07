import {
    mobile,
    backend,
    bootstrap,
    creator,
    code,
    flask,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    ga,
    git,
    gulsan,
    mavi,
    postgresql,
    python,
    sanko,
    luxe,
    tekforest,
    manynanny,
    tamagotchi,
    spaceknight,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: code,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Full-stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Fellow",
      company_name: "General Assembly",
      icon: ga,
      iconBg: "#383E56",
      date: "December 2022 - June 2023",
      points: [
        "Completed a 24-week, 450+ hour immersive program in full stack software engineering using technologies such as HTML, CSS, JS, Python, Node.js, Express.js, Flask, MongoDB ,React, PostgreSQL.",
        "Collaborated with a team of developers in an agile development environment to design, develop, and deploy web applications."
      ],
    },
    {
      title: "Area Sales and Customer Service Supervisor",
      company_name: "Mavi",
      icon: mavi,
      iconBg: "#E6DEDD",
      date: "February 2020 - Present",
      points: [
        "Proactively resolved inquiries and issues, maintaining an active roster of 250+ accounts with a focus on delivering exceptional customer service.",
        "Managed electronic data interchange (EDI) and SPS order entry with SAP to facilitate seamless order processing.",
        "Participated in the project of implementing SAP and utilized Jira as a management tool with the SAP team."
      ],
    },
    {
      title: "Export Sales and Marketing Specialist",
      company_name: "Sanko Holding",
      icon: sanko,
      iconBg: "#383E56",
      date: "March 2014 - May 2017",
      points: [
        "Managed sales operations and strengthened relationships with existing accounts, implementing a more efficient follow-up process that resulted in a 15% increase in on-time deliveries.",
        "Executed technical market research and optimized product offerings.",
        "Contributed to systematization projects, including the implementation of SAP to automate tasks and increase efficiency."
      ],
    },
    {
      title: "Export Sales Representative",
      company_name: "Gulsan Holding",
      icon: gulsan,
      iconBg: "#E6DEDD",
      date: "May 2013 - January 2014",
      points: [
        "Optimized end-to-end order processing and streamlined shipping operations.",
        "Investigated client challenges and provided solutions to improve their experience, resulting in stronger customer ties and satisfaction."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Luxe - Interior Design Company Website",
      description:
        "The website aims to establish a captivating presence for an interior design company, showcasing their expertise and providing a platform to show their services.",
      tags: [
        {
          name: "react",
          color: "text-[#d6aecd]",
        },
        {
          name: "express",
          color: "text-[#d6aecd]",
        },
        {
          name: "nodejs",
          color: "text-[#d6aecd]",
        },
        {
          name: "mongodb",
          color: "text-[#d6aecd]",
        },
        {
          name: "auth0",
          color: "text-[#d6aecd]",
        },
        {
          name: "stripe",
          color: "text-[#d6aecd]",
        },
        {
          name: "bootstrap",
          color: "text-[#d6aecd]",
        },
        {
          name: "vanilla css",
          color: "text-[#d6aecd]",
        },
      ],
      image: luxe,
      source_code_link: "https://github.com/tugcecerit/Luxe-frontend",
      website_link: "https://luxe-frontend.herokuapp.com/"
    },
    {
      name: "TEKforest - Plant Info Website",
      description:
      "TEKforest is a comprehensive website that offers valuable information about a wide range of plants, serving as a reliable resource for users seeking plant-related knowledge.",
      tags: [
        {
          name: "react",
          color: "text-[#d6aecd]",
        },
        {
          name: "express",
          color: "text-[#d6aecd]",
        },
        {
          name: "nodejs",
          color: "text-[#d6aecd]",
        },
        {
          name: "restapi",
          color: "text-[#d6aecd]",
        },
        {
          name: "mongodb",
          color: "text-[#d6aecd]",
        },
        {
          name: "purecss",
          color: "text-[#d6aecd]",
        },
        {
          name: "vanilla css",
          color: "text-[#d6aecd]",
        },
      ],
      image: tekforest,
      source_code_link: "https://github.com/tugcecerit/tekforest-frontend",
      website_link: "https://tekforest-frontend.herokuapp.com/"
    },
    {
      name: "ManyNanny - Babysitter Website",
      description:
        "The website enables babysitters to create detailed profiles with contact information, while providing families a hiring experience to find the perfect caregivers for their children.",
      tags: [
        {
          name: "express",
          color: "text-[#d6aecd]",
        },
        {
          name: "nodejs",
          color: "text-[#d6aecd]",
        },
        {
          name: "mongodb",
          color: "text-[#d6aecd]",
        },
        {
          name: "bootstrap",
          color: "text-[#d6aecd]",
        },
        {
          name: "vanilla css",
          color: "text-[#d6aecd]",
        },
      ],
      image: manynanny,
      source_code_link: "https://github.com/tugcecerit/Many-Nanny",
      website_link: "https://manynanny.herokuapp.com/home"
    },
    {
      name: "Space Knight - Platform Game",
      description:
        "This project is a fun platform game that combines jumping and shooting functionalities for an interactive and entertaining experience.",
      tags: [
        {
          name: "javascript",
          color: "text-[#d6aecd]",
        },
        {
          name: "DOM",
          color: "text-[#d6aecd]",
        },
        {
          name: "vanilla css",
          color: "text-[#d6aecd]",
        },
      ],
      image: spaceknight,
      source_code_link: "https://github.com/tugcecerit/Platform-Game",
      website_link: "https://tugcecerit.github.io/Platform-Game/"
    },
    {
      name: "Tamagotchi - 90's Fav Game",
      description:
        "Introducing my mini and very first game development project! This creation delivers an immersive an engaging experience through the world of Tamagotchi.",
      tags: [
        {
          name: "javascript",
          color: "text-[#d6aecd]",
        },
        {
          name: "vanilla css",
          color: "text-[#d6aecd]",
        },
      ],
      image: tamagotchi,
      source_code_link: "https://github.com/tugcecerit/Tamagotchi-Game",
      website_link: "https://tugcecerit.github.io/Tamagotchi-Game/"
    },
  ];
  
  export { services, technologies, experiences, projects };