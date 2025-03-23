import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: "Generative AI",
    issuer: "GUVI Geek Networks, IITM Research Park",
    date: "Mar 2025",
    credentialId: "751oY41D8HN74115hU",
    skills: ["Artificial Intelligence (AI)", "Generative AI Tools"],
    icon: <FaCertificate className="w-6 h-6" />
  },
  {
    title: "Machine Learning 101",
    issuer: "GUVI Geek Networks, IITM Research Park",
    date: "Mar 2025",
    credentialId: "w1c477JTuz7j14R162",
    skills: ["Machine Learning", "Decision Trees", "Linear Regression", "Logistic Regression"],
    icon: <FaGraduationCap className="w-6 h-6" />
  },
  {
    title: "Artificial Intelligence - Search Methods and Problem Solving",
    issuer: "NPTEL",
    date: "Oct 2024",
    skills: ["Problem Solving", "Artificial Intelligence (AI)", "Critical Thinking", "Algorithms"],
    icon: <FaAward className="w-6 h-6" />
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Indian Institute of Technology, Kharagpur",
    date: "Sep 2024",
    skills: ["Machine Learning", "Data Processing"],
    icon: <FaGraduationCap className="w-6 h-6" />
  },
  {
    title: "Digital Marketing",
    issuer: "HubSpot Academy",
    date: "Jul 2024",
    credentialId: "0989c060e2854a3c846761519d7441b5",
    skills: ["Digital Marketing"],
    icon: <FaCertificate className="w-6 h-6" />
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    date: "May 2024",
    skills: ["AI", "Vertex AI"],
    icon: <FaAward className="w-6 h-6" />
  }
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my professional certifications and achievements in AI, Machine Learning, and related fields.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{cert.date}</span>
                  {cert.credentialId && (
                    <>
                      <span>•</span>
                      <span>ID: {cert.credentialId}</span>
                    </>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates; 