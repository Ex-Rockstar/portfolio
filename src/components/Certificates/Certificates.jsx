import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaCode, FaBrain, FaServer, FaCloud, FaBullhorn } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Generative AI",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      description: "Comprehensive course on Generative AI technologies and applications",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      skills: ["Artificial Intelligence (AI)", "Generative AI Tools"],
      color: "bg-primary-pink"
    },
    {
      title: "HTML & CSS",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      description: "Advanced web development with HTML5, CSS, and Bootstrap",
      icon: <FaCode className="w-8 h-8" />,
      category: "Web Development",
      skills: ["HTML5", "CSS", "Bootstrap"],
      color: "bg-primary-blue"
    },
    {
      title: "Machine Learning 101",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      description: "Fundamentals of machine learning algorithms and applications",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      skills: ["Machine Learning", "Decision Trees", "Linear Regression", "Logistic Regression"],
      color: "bg-primary-yellow"
    },
    {
      title: "Artificial Intelligence - Search Methods and Problem Solving",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Advanced AI concepts focusing on search methods and problem-solving techniques",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      skills: ["Problem Solving", "Artificial Intelligence", "Critical Thinking", "Algorithms"],
      color: "bg-primary-green"
    },
    {
      title: "Introduction to Internet Of Things",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Comprehensive understanding of IoT technologies and applications",
      icon: <FaServer className="w-8 h-8" />,
      category: "IoT",
      color: "bg-primary-purple"
    },
    {
      title: "Re-inforcement Learning",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Advanced concepts in reinforcement learning and its applications",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      skills: ["Reinforcement Learning", "Machine Learning", "Computer Science"],
      color: "bg-primary-orange"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Indian Institute of Technology, Kharagpur",
      date: "Sep 2024",
      description: "Foundational course in machine learning principles and applications",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      skills: ["Machine Learning", "Data Processing"],
      color: "bg-primary-pink"
    },
    {
      title: "Digital Marketing",
      issuer: "HubSpot Academy",
      date: "Jul 2024",
      description: "Comprehensive digital marketing strategies and tools",
      icon: <FaBullhorn className="w-8 h-8" />,
      category: "Marketing",
      skills: ["Digital Marketing"],
      color: "bg-primary-blue"
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google",
      date: "May 2024",
      description: "Advanced prompt engineering techniques for AI models",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      color: "bg-primary-yellow"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      date: "Apr 2024",
      description: "Fundamentals of data science and analytics",
      icon: <FaServer className="w-8 h-8" />,
      category: "Data Science",
      color: "bg-primary-green"
    },
    {
      title: "SDG Goal getter",
      issuer: "The Scouts",
      date: "Apr 2024",
      description: "Leadership in sustainable development goals",
      icon: <FaGraduationCap className="w-8 h-8" />,
      category: "Leadership",
      skills: ["Sustainable Development"],
      color: "bg-[#FFF8E7]"
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google",
      date: "Oct 2023",
      description: "Fundamentals of cloud computing and Google Cloud Platform",
      icon: <FaCloud className="w-8 h-8" />,
      category: "Cloud Computing",
      skills: ["Cloud Computing"],
      color: "bg-primary-purple"
    },
    {
      title: "Level 3: GenAI",
      issuer: "Google",
      date: "Sep 2023",
      description: "Advanced generative AI concepts and applications",
      icon: <FaBrain className="w-8 h-8" />,
      category: "AI/ML",
      color: "bg-primary-orange"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB",
      date: "Aug 2023",
      description: "Fundamentals of MongoDB database management",
      icon: <FaServer className="w-8 h-8" />,
      category: "Database",
      skills: ["MongoDB"],
      color: "bg-primary-pink"
    },
    {
      title: "Python Basics for Data Science",
      issuer: "edX",
      date: "Jan 2022",
      description: "Python programming fundamentals for data science applications",
      icon: <FaCode className="w-8 h-8" />,
      category: "Programming",
      color: "bg-primary-blue"
    }
  ];

  const badgeShapes = [
    'rounded-3xl',
    'rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm',
    'rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm',
    'rounded-full',
  ];

  return (
    <div className="min-h-screen bg-primary-light py-20 px-4 relative overflow-hidden border-t-8 border-primary-dark">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-yellow border-4 border-primary-dark rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-pink border-4 border-primary-dark mix-blend-multiply opacity-50 blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary-green border-4 border-primary-dark shadow-brutal px-8 py-4 rotate-2 hover:-rotate-1 transition-transform cursor-pointer mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-dark uppercase tracking-tighter">
              Certifications
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-dark font-medium max-w-2xl mx-auto bg-primary-light border-4 border-primary-dark shadow-brutal-sm p-4 -rotate-1 font-body">
            Professional badges, stickers, and proof of my continuous learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {certificates.map((cert, index) => {
            const randomRotation = (index % 5) - 2; // Random rotation between -2 and +2

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, type: "spring" }}
                className={`relative group ${cert.color} border-4 border-primary-dark p-6 shadow-brutal hover:shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all duration-300`}
                style={{
                  transform: `rotate(${randomRotation}deg)`,
                  // Alternate shape styles for a 'sticker' feel
                  borderTopLeftRadius: index % 4 === 1 ? '40px' : '8px',
                  borderBottomRightRadius: index % 4 === 1 ? '40px' : '8px',
                  borderTopRightRadius: index % 4 === 2 ? '40px' : '8px',
                  borderBottomLeftRadius: index % 4 === 2 ? '40px' : '8px',
                }}
              >
                {/* Decorative Pin/Tape */}
                {index % 2 === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-primary-dark/80 rotate-3 z-20"></div>
                )}

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary-dark rounded-full transform translate-x-1 translate-y-1"></div>
                    <div className="relative p-5 bg-primary-light border-4 border-primary-dark rounded-full group-hover:rotate-12 transition-transform duration-300 z-10">
                      {cert.icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-dark text-primary-light font-body font-bold text-xs uppercase tracking-wider mb-3 shadow-brutal-sm -rotate-2">
                      {cert.category}
                    </span>
                    <h4 className="text-2xl font-heading font-black text-primary-dark leading-tight mb-2 group-hover:scale-105 transition-transform">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="w-full bg-primary-light border-4 border-primary-dark p-4 shadow-inner mb-4">
                    <p className="text-primary-dark font-body font-bold text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-primary-dark/70 font-body font-bold text-xs uppercase">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-primary-dark font-body font-bold text-xs mt-2 truncate bg-primary-yellow px-2 py-1 border-2 border-primary-dark">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <p className="text-primary-dark font-body font-medium leading-snug mb-4">
                    {cert.description}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-primary-light border-2 border-primary-dark font-body font-bold text-xs shadow-sm hover:bg-primary-dark hover:text-primary-light transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 