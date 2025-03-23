import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaCode, FaBrain, FaServer, FaCloud, FaBullhorn } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Generative AI",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      credentialId: "751oY41D8HN74115hU",
      description: "Comprehensive course on Generative AI technologies and applications",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML",
      skills: ["Artificial Intelligence (AI)", "Generative AI Tools"]
    },
    {
      title: "HTML & CSS",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      credentialId: "C97JR20G4aw114W381",
      description: "Advanced web development with HTML5, CSS, and Bootstrap",
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development",
      skills: ["HTML5", "CSS", "Bootstrap"]
    },
    {
      title: "Machine Learning 101",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Mar 2025",
      credentialId: "w1c477JTuz7j14R162",
      description: "Fundamentals of machine learning algorithms and applications",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML",
      skills: ["Machine Learning", "Decision Trees", "Linear Regression", "Logistic Regression"]
    },
    {
      title: "Artificial Intelligence - Search Methods and Problem Solving",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Advanced AI concepts focusing on search methods and problem-solving techniques",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML",
      skills: ["Problem Solving", "Artificial Intelligence", "Critical Thinking", "Algorithms"]
    },
    {
      title: "Introduction to Internet Of Things",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Comprehensive understanding of IoT technologies and applications",
      icon: <FaServer className="w-6 h-6" />,
      category: "IoT"
    },
    {
      title: "Re-inforcement Learning",
      issuer: "NPTEL",
      date: "Oct 2024",
      description: "Advanced concepts in reinforcement learning and its applications",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML",
      skills: ["Reinforcement Learning", "Machine Learning", "Computer Science"]
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Indian Institute of Technology, Kharagpur",
      date: "Sep 2024",
      description: "Foundational course in machine learning principles and applications",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML",
      skills: ["Machine Learning", "Data Processing"]
    },
    {
      title: "Digital Marketing",
      issuer: "HubSpot Academy",
      date: "Jul 2024",
      credentialId: "0989c060e2854a3c846761519d7441b5",
      description: "Comprehensive digital marketing strategies and tools",
      icon: <FaBullhorn className="w-6 h-6" />,
      category: "Marketing",
      skills: ["Digital Marketing"]
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google",
      date: "May 2024",
      description: "Advanced prompt engineering techniques for AI models",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML"
    },
    
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      date: "Apr 2024",
      description: "Fundamentals of data science and analytics",
      icon: <FaServer className="w-6 h-6" />,
      category: "Data Science"
    },
    {
      title: "SDG Goal getter",
      issuer: "The Scouts",
      date: "Apr 2024",
      description: "Leadership in sustainable development goals",
      icon: <FaGraduationCap className="w-6 h-6" />,
      category: "Leadership",
      skills: ["Sustainable Development"]
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google",
      date: "Oct 2023",
      credentialId: "5450516",
      description: "Fundamentals of cloud computing and Google Cloud Platform",
      icon: <FaCloud className="w-6 h-6" />,
      category: "Cloud Computing",
      skills: ["Cloud Computing"]
    },
    {
      title: "Level 3: GenAI",
      issuer: "Google",
      date: "Sep 2023",
      credentialId: "5393170",
      description: "Advanced generative AI concepts and applications",
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB",
      date: "Aug 2023",
      credentialId: "MDBhck92es3f8",
      description: "Fundamentals of MongoDB database management",
      icon: <FaServer className="w-6 h-6" />,
      category: "Database",
      skills: ["MongoDB"]
    },
    {
      title: "Python Basics for Data Science",
      issuer: "edX",
      date: "Jan 2022",
      credentialId: "ae7505793e26481f9a7500acf1d52ce7",
      description: "Python programming fundamentals for data science applications",
      icon: <FaCode className="w-6 h-6" />,
      category: "Programming"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and courses that have enhanced my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2C1810] bg-opacity-10 rounded-full text-[#2C1810]">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-[#2C1810]">{cert.title}</h4>
                    <span className="px-3 py-1 bg-[#2C1810] bg-opacity-10 text-[#2C1810] rounded-full text-sm">
                      {cert.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Date:</span> {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-gray-600">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{cert.description}</p>
                  {cert.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 