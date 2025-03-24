import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaGamepad, FaGlobe, FaCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Med-Lens Dermatological Manifestation Tool",
      period: "2022-2024",
      description: "Developed a tool to reduce patient consultation time using an ensemble machine learning model for skin disease classification.",
      details: [
        "Implemented CNN for model development and React JS for the frontend, with Firebase for data storage.",
        "Generates detailed reports for doctors to streamline the prescription process."
      ],
      icon: <FaRobot className="w-6 h-6" />,
      category: "AI/ML",
      links: {
        github: "https://github.com/Ex-Rockstar/Med-Lens",
        demo: "https://med-lens-demo.com"
      }
    },
    {
      title: "Stress Relief and Anxiety Therapy Using AI",
      period: "Since 2022",
      description: "Developed an AI-driven chatbot utilizing Reinforcement Learning with Meta's LLaMA 3 model.",
      details: [
        "Provides personalized support and information for stress relief and anxiety management."
      ],
      icon: <FaRobot className="w-6 h-6" />,
      category: "AI/ML",
      links: {
        github: "https://github.com/Ex-Rockstar/Muk-bot",
        demo: "https://serenitysquad.netlify.app/"
      }
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
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "Utility Bills Maintenance System",
      period: "2023",
      company: "Virtusa Hackathon",
      description: "Developed a Django-based system for managing utility bills with Firebase integration.",
      details: [
        "Implemented real-time data synchronization for improved user experience."
      ],
      icon: <FaDatabase className="w-6 h-6" />,
      category: "Web Development",
      links: {
        github: "https://github.com/Ex-Rockstar/UtilityBillingSystem"
      }
    },
    {
      title: "Seyal Foundation Website",
      period: "2023",
      description: "Developed the website using React JS to enhance online visibility for the youth-focused NGO.",
      details: [
        "Improved user engagement through responsive design and intuitive navigation."
      ],
      icon: <FaGlobe className="w-6 h-6" />,
      category: "Web Development",
      links: {
        demo: "https://seyalngo.org/"
      }
    },
    {
      title: "Innovatia Symposium Website",
      period: "2023",
      description: "Created the symposium website using React JS and MongoDB for efficient event management.",
      details: [
        "Enabled easy access to event information and registration for participants."
      ],
      icon: <FaGlobe className="w-6 h-6" />,
      category: "Web Development",
      links: {
        demo: "https://innovatia23.tech"
      }
    },
    {
      title: "IEEE SMC Student Chapter Website",
      period: "2023",
      description: "Built the website using WordPress to promote student chapter activities.",
      details: [
        "Provided resources and updates to enhance member engagement."
      ],
      icon: <FaGlobe className="w-6 h-6" />,
      category: "Web Development",
      links: {
        demo: "https://edu.ieee.org/in-sairamsmc/"
      }
    },
    {
      title: "Sairam UBA Website Maintenance",
      period: "2023",
      description: "Maintained the website utilizing React JS and Node.js for optimal performance.",
      details: [
        "Ensured a seamless user experience through regular updates and troubleshooting."
      ],
      icon: <FaGlobe className="w-6 h-6" />,
      category: "Web Development",
      links: {
        demo: "https://sairamuba.com/"
      }
    },
    {
      title: "Aluminus",
      period: "2023",
      description: "Designed and developed the frontend of an online forum connecting students, alumni, and faculty.",
      details: [
        "Utilized React and TypeScript to implement group chat spaces and one-to-one messaging features.",
        "Collaborated with the backend team to ensure seamless user interactions.",
        "Supported communication management for over 500 users."
      ],
      icon: <FaMobileAlt className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "Platformer-Based Game Application",
      period: "2023",
      description: "Developed a platformer game utilizing Unity for dynamic gameplay mechanics.",
      details: [
        "Designed and implemented engaging game levels, characters, and interactions."
      ],
      icon: <FaGamepad className="w-6 h-6" />,
      category: "Game Development",
      links: {
        demo: "https://exrockstar.itch.io/frepples"
      }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            anticipatePin: 1
          },
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out"
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={projectsRef} id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-white to-primary-beige">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading1 text-primary-dark mb-3 sm:mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-taupe max-w-2xl mx-auto px-4">
            A collection of my technical projects and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-primary-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-beige"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-beige rounded-lg flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading2 text-primary-dark mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-taupe mb-2">
                    {project.company && (
                      <>
                        <span className="font-medium">{project.company}</span>
                        <span className="text-primary-burgundy">•</span>
                      </>
                    )}
                    <span>{project.period}</span>
                  </div>
                  <p className="text-primary-taupe mb-3">{project.description}</p>
                  <ul className="list-disc list-inside text-primary-taupe mb-4 space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary-burgundy hover:text-primary-dark transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary-burgundy hover:text-primary-dark transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 