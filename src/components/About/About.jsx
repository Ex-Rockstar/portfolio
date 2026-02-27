import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaUsers, FaGraduationCap, FaLaptopCode, FaServer, FaMobileAlt, FaGlobe, FaDatabase, FaCloud, FaShieldAlt, FaRobot, FaChartLine, FaGamepad, FaHeart } from 'react-icons/fa';

const About = () => {
  const skills = {
    programming: {
      title: "Programming Languages",
      icon: <FaCode className="w-8 h-8" />,
      color: "bg-primary-pink",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: <FaBrain className="w-8 h-8" />,
      color: "bg-primary-blue",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP", level: 70 }
      ]
    },
    tools: {
      title: "Development Tools",
      icon: <FaTools className="w-8 h-8" />,
      color: "bg-primary-yellow",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 85 }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <FaUsers className="w-8 h-8" />,
      color: "bg-primary-green",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "Team Work", level: 90 }
      ]
    }
  };

  const education = [
    {
      degree: "Master of Technology - MTech",
      specialization: "Computer Engineering",
      school: "Sri Sairam Engineering College",
      period: "2021 - 2026",
      location: "Chennai, Tamil Nadu",
      gpa: "8.5 CGPA",
      skills: ["Java", "Social Media Management", "Computer Science", "Software Engineering", "Data Structures", "Algorithms", "Web Development", "Database Management", "Machine Learning", "Artificial Intelligence", "Cloud Computing", "DevOps"],
      icon: <FaGraduationCap className="w-8 h-8" />,
      color: "bg-primary-purple"
    },
    {
      degree: "High School Diploma",
      specialization: "Computer Science",
      school: "TVS Matriculation Higher Secondary School",
      period: "Jun 2007 - Apr 2021",
      location: "Madurai, Tamil Nadu",
      skills: ["Hindi", "Tamil", "Computer Science", "Mathematics"],
      icon: <FaGraduationCap className="w-8 h-8" />,
      color: "bg-primary-orange"
    }
  ];

  const interests = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Software Development",
      description: "Building scalable and efficient applications",
      color: "bg-primary-pink"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI Research",
      description: "Exploring cutting-edge AI technologies",
      color: "bg-primary-blue"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Sharing knowledge and mentoring others",
      color: "bg-primary-yellow"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Healthcare AI",
      description: "Developing AI solutions for healthcare",
      color: "bg-primary-green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div id="about" className="min-h-screen bg-primary-light py-20 px-4 sm:px-6 md:px-8 overflow-hidden relative border-t-8 border-primary-dark">
      {/* Decorative chaotic background lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1A1A1A 0, #1A1A1A 2px, transparent 2px, transparent 10px)' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-block bg-primary-yellow border-4 border-primary-dark shadow-brutal px-8 py-4 mb-16 transform -rotate-1 hover:rotate-2 transition-transform"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-dark uppercase tracking-tight">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary-pink border-4 border-primary-dark shadow-brutal p-6 md:p-8 mb-20 max-w-3xl transform rotate-1 hover:-rotate-1 transition-transform"
        >
          <p className="text-xl md:text-3xl font-bold text-primary-dark leading-snug">
            A passionate developer bridging the gap between <span className="underline decoration-4 decoration-primary-yellow">cutting-edge AI research</span> and solid software engineering.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="flex items-center mb-8 gap-4">
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary-dark bg-primary-blue inline-block px-4 py-2 border-4 border-primary-dark shadow-brutal-sm -rotate-2">
              MY SKILLS
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(skills).map(([key, category]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className={`bg-primary-light border-4 border-primary-dark shadow-brutal p-6 relative group overflow-hidden transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm rotate-1 hover:rotate-0`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 border-4 border-primary-dark z-0`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 ${category.color} border-4 border-primary-dark shadow-brutal-sm transform -rotate-6 group-hover:rotate-0 transition-transform`}>
                      {category.icon}
                    </div>
                    <h4 className="text-2xl font-heading font-black text-primary-dark uppercase">{category.title}</h4>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill">
                        <div className="flex justify-between mb-2 font-bold font-body text-primary-dark text-lg uppercase tracking-wide">
                          <span>{skill.name}</span>
                          <span className="bg-primary-dark text-primary-light px-2 py-1 text-sm translate-y-2 opacity-0 group-hover/skill:translate-y-0 group-hover/skill:opacity-100 transition-all">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-primary-light border-4 border-primary-dark h-6 p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2, type: "spring" }}
                            className={`h-full ${category.color} border-r-4 border-primary-dark`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center mb-8 gap-4 justify-end">
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary-dark bg-primary-green inline-block px-4 py-2 border-4 border-primary-dark shadow-brutal-sm rotate-2">
              EDUCATION
            </h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-light border-4 border-primary-dark shadow-brutal p-6 md:p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform transform even:-rotate-1 odd:rotate-1"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className={`p-5 ${edu.color} border-4 border-primary-dark shadow-brutal-sm shrink-0 self-start rotate-3`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h4 className="text-2xl md:text-3xl font-heading font-black text-primary-dark uppercase">{edu.degree}</h4>
                      {edu.gpa && (
                        <span className="px-4 py-2 bg-primary-yellow border-4 border-primary-dark shadow-brutal-sm font-bold text-primary-dark transform rotate-2">
                          {edu.gpa}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-body text-lg font-medium text-primary-dark bg-primary-light border-4 border-primary-dark p-4">
                      <p><span className="font-bold underline">School:</span> {edu.school}</p>
                      <p><span className="font-bold underline">Major:</span> {edu.specialization}</p>
                      <p><span className="font-bold underline">Timeline:</span> {edu.period}</p>
                      {edu.location && <p><span className="font-bold underline">Location:</span> {edu.location}</p>}
                    </div>

                    {edu.skills && (
                      <div>
                        <p className="font-heading font-black text-xl mb-3 text-primary-dark uppercase">Core Subjects & Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-primary-light border-2 border-primary-dark font-bold text-sm hover:bg-primary-dark hover:text-primary-light transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests & Journey Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-orange border-4 border-primary-dark shadow-brutal p-8 transform rotate-1 hover:-rotate-1 transition-transform"
          >
            <h3 className="text-4xl font-heading font-black text-primary-dark mb-6 uppercase tracking-tight bg-primary-light inline-block px-3 py-1 border-4 border-primary-dark -rotate-2">My Journey</h3>
            <div className="space-y-6 font-body text-lg md:text-xl font-medium text-primary-dark bg-primary-light border-4 border-primary-dark p-6 shadow-inner">
              <p>
                I'm a dedicated AI researcher and software engineer with a passion for developing innovative solutions
                in healthcare and mental wellness. My journey in technology has been driven by a desire to create
                meaningful impact through artificial intelligence.
              </p>
              <p>
                Currently pursuing my studies at Sri Sairam Engineering College, I've developed expertise in
                machine learning, deep learning, and software development. My work focuses on creating AI-powered
                solutions that can improve healthcare outcomes and enhance mental wellness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-purple border-4 border-primary-dark shadow-brutal p-8 transform -rotate-1 hover:rotate-1 transition-transform"
          >
            <h3 className="text-4xl font-heading font-black text-primary-light mb-6 uppercase tracking-tight bg-primary-dark inline-block px-3 py-1 border-4 border-primary-light rotate-2">Core Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${interest.color} border-4 border-primary-dark shadow-brutal-sm p-4 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer`}
                >
                  <div className="bg-primary-light p-3 border-4 border-primary-dark rounded-full">
                    {interest.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-primary-dark uppercase leading-tight mb-2">{interest.title}</h4>
                    <p className="font-body font-medium text-primary-dark text-sm leading-snug">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
