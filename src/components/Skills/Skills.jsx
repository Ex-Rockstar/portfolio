import React, { useEffect, useRef } from 'react';
import { FaCode, FaRobot, FaDatabase, FaMobileAlt, FaServer, FaPalette, FaTools } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="w-8 h-8" />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C++"
      ]
    },
    {
      title: "Web Development",
      icon: <FaCode className="w-8 h-8" />,
      skills: [
        "React.js",
        "Node.js",
        "Django",
        "Flask",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "WordPress"
      ]
    },
    {
      title: "AI/ML",
      icon: <FaRobot className="w-8 h-8" />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn"
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Redis"
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt className="w-8 h-8" />,
      skills: [
        "React Native",
        "Flutter",
        "Unity",
        "Game Development"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="w-8 h-8" />,
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Jenkins",
        "Linux"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="w-8 h-8" />,
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "User Research",
        "Prototyping"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-8 h-8" />,
      skills: [
        "RESTful APIs",
        "GraphQL",
        "Microservices",
        "System Design",
        "Cloud Computing"
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const categories = gsap.utils.toArray('.skill-category');
      
      categories.forEach((category, index) => {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={skillsRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-white to-primary-beige">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading1 text-primary-dark mb-3 sm:mb-4">
            Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-taupe max-w-2xl mx-auto px-4">
            My technical expertise and areas of specialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-primary-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-beige"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-beige rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading2 text-primary-dark">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-beige text-primary-taupe rounded-full text-sm hover:bg-primary-burgundy hover:text-primary-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 