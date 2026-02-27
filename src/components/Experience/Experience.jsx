import React from 'react';
import { FaGraduationCap, FaCode, FaFlag, FaUsers, FaPalette, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      category: "Professional Organization",
      color: "bg-primary-blue"
    },
    {
      title: "Summer AI Intern",
      company: "Vajra Global Consulting Services LLP",
      period: "Jun 2024 - Aug 2024",
      location: "Chennai, Tamil Nadu, India · On-site",
      type: "Internship",
      description: "Working on AI and machine learning projects",
      skills: ["LLaMA", "Python", "RAG", "Streamlit"],
      icon: <FaRobot className="w-6 h-6" />,
      category: "AI/ML",
      color: "bg-primary-pink"
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
      category: "Web Development",
      color: "bg-primary-yellow"
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
      category: "Standards",
      color: "bg-primary-green"
    },
    {
      title: "Campus Ambassador - Influencer",
      company: "Atal Innovation Mission Official",
      period: "Nov 2023 - Present",
      type: "Full-time",
      description: "Promoting innovation and entrepreneurship on campus",
      skills: ["Problem Solving", "Microsoft Word"],
      icon: <FaUsers className="w-6 h-6" />,
      category: "Leadership",
      color: "bg-primary-orange"
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
      category: "Leadership",
      color: "bg-primary-purple"
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
      category: "Professional Organization",
      color: "bg-[#FFF8E7]"
    },
    {
      title: "Designer",
      company: "Unnat Bharat Abhiyan",
      period: "Dec 2022 - Feb 2024",
      location: "Chennai, Tamil Nadu, India",
      type: "Part-time",
      description: "Designing posters and managing social media content for UBA",
      skills: ["Canva", "Social Media Marketing", "Content Creation", "Print Design"],
      icon: <FaPalette className="w-6 h-6" />,
      category: "Design",
      color: "bg-primary-pink"
    },
    {
      title: "Webmaster",
      company: "IEEE",
      period: "Jan 2022 - Jun 2023",
      type: "Part-time",
      description: "Managing IEEE chapter website and digital presence",
      skills: ["WordPress", "Social Media Management", "JavaScript", "HTML"],
      icon: <FaCode className="w-6 h-6" />,
      category: "Web Development",
      color: "bg-primary-blue"
    },
    {
      title: "Director",
      company: "Seyal Foundation",
      period: "May 2022 - Mar 2025",
      type: "Full-time",
      description: "Founding member managing digital content and social media",
      skills: ["Social Media Marketing", "Content Creation", "Logo Design", "Public Speaking"],
      icon: <FaUsers className="w-6 h-6" />,
      category: "Leadership",
      color: "bg-primary-yellow"
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
      category: "Web Development",
      color: "bg-primary-green"
    }
  ];

  return (
    <div className="py-20 bg-primary-yellow overflow-hidden relative border-t-8 border-primary-dark">
      {/* Playful background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary-light border-4 border-primary-dark shadow-brutal px-8 py-4 rotate-2 hover:-rotate-1 transition-transform cursor-pointer">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-dark uppercase tracking-tighter">
              Experience
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-dark font-medium max-w-2xl mx-auto mt-8 bg-primary-pink border-4 border-primary-dark shadow-brutal-sm p-4 -rotate-1 font-body">
            A chronological journey through my professional chaos and roles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
              key={index}
              className={`relative mb-8 md:mb-12 flex flex-col md:flex-row gap-6 group`}
            >
              {/* Timeline Connector Desktop - only show between items */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 bottom-[-3rem] w-2 bg-primary-dark ml-[-1px] group-hover:bg-primary-pink transition-colors z-0"></div>
              )}

              {/* Icon / Marker */}
              <div className="relative z-10 self-start md:self-auto">
                <div className={`w-20 h-20 flex items-center justify-center ${exp.color} border-4 border-primary-dark shadow-brutal rounded-none transform rotate-${index % 2 === 0 ? '6' : '-6'} group-hover:rotate-0 group-hover:scale-110 transition-all duration-300`}>
                  <div className="text-primary-dark scale-150">{exp.icon}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className={`bg-primary-light p-6 md:p-8 border-4 border-primary-dark shadow-brutal hover:shadow-brutal-sm transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-primary-dark uppercase leading-tight mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl font-body font-bold text-primary-dark bg-primary-yellow inline-block px-2 border-2 border-primary-dark -rotate-1">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                      <span className="font-body font-bold text-primary-light bg-primary-dark px-3 py-1 text-sm tracking-wide shadow-brutal-sm">
                        {exp.period}
                      </span>
                      <span className="font-body font-bold text-primary-dark border-2 border-primary-dark px-2 py-0.5 text-xs bg-primary-light">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-primary-dark font-body font-medium text-lg leading-relaxed mb-4 pl-4 border-l-4 border-primary-pink bg-primary-light/50 py-2">
                    {exp.description}
                  </p>

                  {exp.location && (
                    <div className="text-primary-dark font-body font-bold text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-dark block rounded-full"></span>
                      {exp.location}
                    </div>
                  )}

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-4 border-primary-dark border-dashed">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-light border-2 border-primary-dark text-primary-dark font-body font-bold text-sm hover:bg-primary-dark hover:text-primary-light transition-colors cursor-default">
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

export default Experience; 