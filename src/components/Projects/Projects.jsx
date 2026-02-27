import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaGamepad, FaGlobe, FaCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Med-Lens Dermatological Manifestation Tool",
      period: "2022-2024",
      description: "Developed a tool to reduce patient consultation time using an ensemble machine learning model for skin disease classification.",
      details: [
        "Implemented CNN for model development and React JS for the frontend, with Firebase for data storage.",
        "Generates detailed reports for doctors to streamline the prescription process."
      ],
      icon: <FaRobot className="w-8 h-8" />,
      category: "AI/ML",
      color: "bg-primary-pink",
      links: {
        github: "https://github.com/Ex-Rockstar/Med-Lens",
        demo: "https://med-lens-demo.com"
      },
      span: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Stress Relief and Anxiety Therapy Using AI",
      period: "Since 2022",
      description: "Developed an AI-driven chatbot utilizing Reinforcement Learning with Meta's LLaMA 3 model.",
      details: [
        "Provides personalized support and information for stress relief and anxiety management."
      ],
      icon: <FaRobot className="w-8 h-8" />,
      category: "AI/ML",
      color: "bg-primary-blue",
      links: {
        github: "https://github.com/Ex-Rockstar/Muk-bot",
        demo: "https://serenitysquad.netlify.app/"
      },
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "CTS Café Program",
      period: "April 2023 - June 2023",
      company: "Cognizant",
      location: "Chennai",
      description: "Participated in the CTS Café program hosted by Cognizant, collaborating with five colleges.",
      details: [
        "Developed a dynamic UI framework using Node.js, creating ready-to-use customizable components for developers."
      ],
      icon: <FaCode className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-yellow",
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Utility Bills Maintenance System",
      period: "2023",
      company: "Virtusa Hackathon",
      description: "Developed a Django-based system for managing utility bills with Firebase integration.",
      details: [
        "Implemented real-time data synchronization for improved user experience."
      ],
      icon: <FaDatabase className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-green",
      links: {
        github: "https://github.com/Ex-Rockstar/UtilityBillingSystem"
      },
      span: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Seyal Foundation Website",
      period: "2023",
      description: "Developed the website using React JS to enhance online visibility for the youth-focused NGO.",
      details: [
        "Improved user engagement through responsive design and intuitive navigation."
      ],
      icon: <FaGlobe className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-purple",
      links: {
        demo: "https://seyalngo.org/"
      },
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Innovatia Symposium Website",
      period: "2023",
      description: "Created the symposium website using React JS and MongoDB for efficient event management.",
      details: [
        "Enabled easy access to event information and registration for participants."
      ],
      icon: <FaGlobe className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-orange",
      links: {
        demo: "https://innovatia23.tech"
      },
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "IEEE SMC Student Chapter Website",
      period: "2023",
      description: "Built the website using WordPress to promote student chapter activities.",
      details: [
        "Provided resources and updates to enhance member engagement."
      ],
      icon: <FaGlobe className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-[#FFF8E7]",
      links: {
        demo: "https://edu.ieee.org/in-sairamsmc/"
      },
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Sairam UBA Website",
      period: "2023",
      description: "Maintained the website utilizing React JS and Node.js for optimal performance.",
      details: [
        "Ensured a seamless user experience through regular updates and troubleshooting."
      ],
      icon: <FaGlobe className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-pink",
      links: {
        demo: "https://sairamuba.com/"
      },
      span: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Aluminus",
      period: "2023",
      description: "Designed and developed the frontend of an online forum connecting students, alumni, and faculty.",
      details: [
        "Utilized React and TypeScript to implement group chat spaces and one-to-one messaging features.",
        "Collaborated with the backend team to ensure seamless user interactions."
      ],
      icon: <FaMobileAlt className="w-8 h-8" />,
      category: "Web Development",
      color: "bg-primary-blue",
      span: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Platformer Game",
      period: "2023",
      description: "Developed a platformer game utilizing Unity for dynamic gameplay mechanics.",
      details: [
        "Designed and implemented engaging game levels, characters, and interactions."
      ],
      icon: <FaGamepad className="w-8 h-8" />,
      category: "Game Development",
      color: "bg-primary-yellow",
      links: {
        demo: "https://exrockstar.itch.io/frepples"
      },
      span: "md:col-span-3 lg:col-span-1"
    }
  ];

  return (
    <div id="projects" className="py-20 bg-primary-light overflow-hidden border-t-8 border-primary-dark relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-pink rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-pink border-4 border-primary-dark shadow-brutal px-8 py-4 -rotate-2 hover:rotate-1 transition-transform cursor-default">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-dark uppercase tracking-tighter">
              Projects
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-dark font-medium max-w-2xl mx-auto mt-8 bg-primary-light border-4 border-primary-dark shadow-brutal-sm p-4 rotate-1 font-body">
            A collection of my technical projects and contributions. Chaos engineered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(350px,auto)]">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5, type: 'spring' }}
              key={index}
              className={`group flex flex-col ${project.span} ${project.color} border-4 border-primary-dark p-6 shadow-brutal hover:shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative overflow-hidden`}
              style={{
                borderRadius: index % 3 === 0 ? '16px' : index % 2 === 0 ? '8px' : '0px',
                transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)`
              }}
            >
              {/* Background accent */}
              <div className="absolute -right-10 -top-10 text-primary-dark opacity-10 transform group-hover:scale-150 transition-transform duration-500 group-hover:rotate-12">
                {React.cloneElement(project.icon, { className: 'w-48 h-48' })}
              </div>

              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="p-4 bg-primary-light border-4 border-primary-dark shadow-brutal-sm rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform duration-300 shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-primary-dark uppercase leading-tight mb-2 group-hover:underline decoration-4 underline-offset-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-dark font-body font-bold text-sm flex-wrap">
                    {project.company && (
                      <span className="bg-primary-dark text-primary-light px-2 py-1 rounded-sm">{project.company}</span>
                    )}
                    <span className="bg-primary-light text-primary-dark border-2 border-primary-dark px-2 py-1 relative -top-1 rotate-2">
                      {project.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative z-10 mt-2 bg-primary-light border-4 border-primary-dark p-4 shadow-brutal-sm -mx-2 mb-4 group-hover:-translate-y-1 transition-transform">
                <p className="text-primary-dark font-medium font-body text-lg leading-snug mb-3">
                  {project.description}
                </p>
                <ul className="list-disc list-outside ml-5 text-primary-dark font-body font-medium space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto relative z-10">
                {project.links && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-dark text-primary-light font-heading font-bold uppercase transition-transform hover:-translate-y-1"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-light border-4 border-primary-dark text-primary-dark font-heading font-bold uppercase font-black transition-transform hover:-translate-y-1 hover:shadow-[2px_2px_0px_#1A1A1A]"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 