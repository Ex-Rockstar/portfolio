import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers } from 'react-icons/fa';

const experiences = [
  {
    title: "Web Developer",
    company: "Unnat Bharat Abhiyan",
    duration: "Feb 2024 - Present",
    location: "Chennai, Tamil Nadu, India",
    type: "Full-time",
    skills: ["React.js", "JavaScript", "Web Development", "Leadership", "Media Management"],
    icon: <FaBriefcase className="w-6 h-6" />
  },
  {
    title: "Designer",
    company: "Unnat Bharat Abhiyan",
    duration: "Dec 2022 - Feb 2024",
    location: "Chennai, Tamil Nadu, India",
    type: "Part-time",
    skills: ["Canva", "Social Media Marketing", "Content Creation", "Print Design"],
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    title: "Treasurer",
    company: "IEEE",
    duration: "Jun 2023 - Present",
    location: "Chennai, Tamil Nadu, India",
    type: "Part-time",
    skills: ["Problem Solving", "Management", "Organization"],
    icon: <FaGraduationCap className="w-6 h-6" />
  },
  {
    title: "Director",
    company: "Seyal Foundation",
    duration: "May 2022 - Mar 2025",
    location: "Remote",
    type: "Full-time",
    skills: ["Social Media Management", "Content Creation", "Leadership", "Design"],
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    title: "Summer AI Intern",
    company: "Vajra Global Consulting Services LLP",
    duration: "Jun 2024 - Aug 2024",
    location: "Chennai, Tamil Nadu, India",
    type: "Internship",
    skills: ["LLaMA", "Python", "Streamlit", "RAG"],
    icon: <FaBriefcase className="w-6 h-6" />
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my professional experiences and roles that have shaped my career journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
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

export default Experience; 