import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaUsers, FaGraduationCap, FaLaptopCode, FaServer, FaMobileAlt, FaGlobe, FaDatabase, FaCloud, FaShieldAlt, FaRobot, FaChartLine, FaGamepad, FaHeart } from 'react-icons/fa';

const About = () => {
  const skills = {
    programming: {
      title: "Programming Languages",
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: <FaBrain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP", level: 70 }
      ]
    },
    tools: {
      title: "Development Tools",
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 85 }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <FaUsers className="w-6 h-6" />,
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
      icon: <FaGraduationCap className="w-6 h-6" />
    },
    {
      degree: "High School Diploma",
      specialization: "Computer Science",
      school: "TVS Matriculation Higher Secondary School",
      period: "Jun 2007 - Apr 2021",
      location: "Madurai, Tamil Nadu",
      skills: ["Hindi", "Tamil", "Computer Science", "Mathematics"],
      icon: <FaGraduationCap className="w-6 h-6" />
    }
  ];

  const interests = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Software Development",
      description: "Building scalable and efficient applications"
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "AI Research",
      description: "Exploring cutting-edge AI technologies"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Sharing knowledge and mentoring others"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Healthcare AI",
      description: "Developing AI solutions for healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">About Me</h2>
          <p className="text-primary-taupe max-w-2xl mx-auto">
            A passionate developer with expertise in AI, web development, and software engineering.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-primary-dark mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary-beige hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-taupe bg-opacity-20 rounded-full text-primary-dark">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary-dark">{category.title}</h4>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-primary-dark font-medium">{skill.name}</span>
                        <span className="text-primary-taupe">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary-white rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-2 rounded-full bg-primary-burgundy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-primary-dark mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary-beige hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-taupe bg-opacity-20 rounded-full text-primary-dark">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-primary-dark">{edu.degree}</h4>
                      {edu.gpa && (
                        <span className="px-3 py-1 bg-primary-taupe bg-opacity-20 text-primary-dark rounded-full text-sm">
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-primary-taupe">
                        <span className="font-medium">School:</span> {edu.school}
                      </p>
                      <p className="text-primary-taupe">
                        <span className="font-medium">Specialization:</span> {edu.specialization}
                      </p>
                      <p className="text-primary-taupe">
                        <span className="font-medium">Period:</span> {edu.period}
                      </p>
                      {edu.location && (
                        <p className="text-primary-taupe">
                          <span className="font-medium">Location:</span> {edu.location}
                        </p>
                      )}
                    </div>
                    {edu.skills && (
                      <div className="mt-4">
                        <p className="text-primary-taupe font-medium mb-2">Key Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-primary-white text-primary-dark rounded-full text-sm">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border border-primary-beige">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">My Journey</h3>
              <p className="text-primary-taupe leading-relaxed">
                I'm a dedicated AI researcher and software engineer with a passion for developing innovative solutions
                in healthcare and mental wellness. My journey in technology has been driven by a desire to create
                meaningful impact through artificial intelligence.
              </p>
              <p className="text-primary-taupe leading-relaxed mt-4">
                Currently pursuing my studies at Sri Sairam Engineering College, I've developed expertise in
                machine learning, deep learning, and software development. My work focuses on creating AI-powered
                solutions that can improve healthcare outcomes and enhance mental wellness.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-primary-beige">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.programming.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-primary-dark">{skill.name}</span>
                      <span className="text-primary-taupe">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-primary-white rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-burgundy to-primary-taupe h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interests and Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border border-primary-beige">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">Interests & Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-primary-white hover:bg-primary-beige transition-colors duration-300"
                  >
                    <div className="text-primary-burgundy">
                      {interest.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-dark">{interest.title}</h4>
                      <p className="text-primary-taupe text-sm">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
