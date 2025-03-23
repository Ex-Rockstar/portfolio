import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaGlobe, FaBrain, FaGamepad, FaUsers, FaGraduationCap, FaFlag } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Student Member",
      company: "IEEE-Eta Kappa Nu",
      period: "Jul 2024 - Present",
      location: "India · Remote",
      type: "Full-time",
      description: "Active member of the prestigious IEEE honor society",
      icon: <FaGraduationCap className="w-6 h-6" />,
      category: "Professional Organization"
    },
    {
      title: "Web Developer",
      company: "Unnat Bharat Abhiyan",
      period: "Feb 2024 - Present",
      location: "Chennai, Tamil Nadu, India · Hybrid",
      type: "Full-time",
      description: "Leading web development initiatives and content management",
      skills: ["React.js", "JavaScript", "Web Development", "Leadership", "Media Management"],
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "Designer",
      company: "Unnat Bharat Abhiyan",
      period: "Dec 2022 - Feb 2024",
      location: "Chennai, Tamil Nadu, India",
      type: "Part-time",
      description: "Designing posters and managing social media content for UBA",
      skills: ["Canva", "Social Media Marketing", "Content Creation", "Print Design"],
      icon: <FaGlobe className="w-6 h-6" />,
      category: "Design"
    },
    {
      title: "Manak mitra",
      company: "Bureau of Indian Standards",
      period: "Feb 2024 - Present",
      location: "Remote",
      type: "Part-time",
      description: "Contributing to standardization initiatives",
      skills: ["Problem Solving", "Microsoft Word"],
      icon: <FaFlag className="w-6 h-6" />,
      category: "Standards"
    },
    {
      title: "Campus Ambassador - Influencer",
      company: "Atal Innovation Mission Official",
      period: "Nov 2023 - Present",
      type: "Full-time",
      description: "Promoting innovation and entrepreneurship on campus",
      skills: ["Problem Solving", "Microsoft Word"],
      icon: <FaUsers className="w-6 h-6" />,
      category: "Leadership"
    },
    {
      title: "Campus Ambassador",
      company: "MyGov India",
      period: "Oct 2023 - Present",
      location: "Chennai, Tamil Nadu, India · Remote",
      type: "Full-time",
      description: "Spreading awareness about government policies and initiatives",
      skills: ["Public Speaking", "Community Engagement", "Management", "Leadership"],
      icon: <FaUsers className="w-6 h-6" />,
      category: "Leadership"
    },
    {
      title: "Treasurer",
      company: "IEEE",
      period: "Jun 2023 - Present",
      location: "Chennai, Tamil Nadu, India · Remote",
      type: "Part-time",
      description: "Managing financial operations for IEEE chapter",
      skills: ["Problem Solving", "Microsoft Word", "Calendars"],
      icon: <FaGraduationCap className="w-6 h-6" />,
      category: "Professional Organization"
    },
    {
      title: "Webmaster",
      company: "IEEE",
      period: "Jan 2022 - Jun 2023",
      type: "Part-time",
      description: "Managing IEEE chapter website and digital presence",
      skills: ["WordPress", "Social Media Management", "JavaScript", "HTML"],
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "Director",
      company: "Seyal Foundation",
      period: "May 2022 - Mar 2025",
      type: "Full-time",
      description: "Founding member managing digital content and social media",
      skills: ["Social Media Marketing", "Content Creation", "Logo Design", "Public Speaking"],
      icon: <FaUsers className="w-6 h-6" />,
      category: "Leadership"
    },
    {
      title: "Summer AI Intern",
      company: "Vajra Global Consulting Services LLP",
      period: "Jun 2024 - Aug 2024",
      location: "Chennai, Tamil Nadu, India · On-site",
      type: "Internship",
      description: "Working on AI and machine learning projects",
      skills: ["LLaMA", "Python", "RAG", "Streamlit"],
      icon: <FaBrain className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "Student Intern",
      company: "Vajra Global Consulting Services LLP",
      period: "Jan 2022 - Nov 2023",
      location: "Chennai, Tamil Nadu, India",
      type: "Internship",
      description: "Full-stack development and web design",
      skills: ["Python", "Django", "Flutter", "Web Development", "SQL"],
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development"
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
          <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A chronological journey through my professional experiences and roles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#2C1810] opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2C1810] rounded-full z-10"></div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#2C1810] bg-opacity-10 rounded-full text-[#2C1810]">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-[#2C1810]">{exp.title}</h4>
                          <span className="px-3 py-1 bg-[#2C1810] bg-opacity-10 text-[#2C1810] rounded-full text-sm">
                            {exp.category}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            <span className="font-medium">Company:</span> {exp.company}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Period:</span> {exp.period}
                          </p>
                          {exp.location && (
                            <p className="text-gray-600">
                              <span className="font-medium">Location:</span> {exp.location}
                            </p>
                          )}
                          <p className="text-gray-600">
                            <span className="font-medium">Type:</span> {exp.type}
                          </p>
                        </div>
                        <p className="mt-4 text-gray-600">{exp.description}</p>
                        {exp.skills && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 