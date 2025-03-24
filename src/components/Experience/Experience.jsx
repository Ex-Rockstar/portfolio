import React, { useEffect, useRef } from 'react';
import { FaBriefcase, FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaGlobe, FaBrain, FaGamepad, FaUsers, FaGraduationCap, FaFlag } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

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
      logo: "../../assets/images/hkn.webp"
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
      category: "AI/ML",
      logo: "/src/assets/images/vajra-logo.png"
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
      logo: "/src/assets/images/uba-logo.png"
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
      logo: "/src/assets/images/bis-logo.png"
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
      logo: "/src/assets/images/aim-logo.png"
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
      logo: "/src/assets/images/mygov-logo.png"
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
      logo: "/src/assets/images/ieee-logo.png"
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
      category: "Design",
      logo: "/src/assets/images/uba-logo.png"
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
      logo: "/src/assets/images/ieee-logo.png"
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
      logo: "/src/assets/images/seyal-logo.png"
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
      logo: "/src/assets/images/vajra-logo.png"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.experience-card');
      
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
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={experienceRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-white to-primary-beige">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading1 text-primary-dark mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-taupe max-w-2xl mx-auto px-4">
            A chronological journey through my professional experiences and roles.
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-burgundy"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'
              }`}
            >
              <div className="bg-primary-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-beige">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-beige rounded-lg flex-shrink-0">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNFMkUyRTIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0FBQUFBQSIgZm9udC1zaXplPSIxMiI+TG9nbzwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    ) : (
                      exp.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading2 text-primary-dark mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-taupe mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-primary-burgundy">•</span>
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <p className="text-primary-taupe mb-2">{exp.location}</p>
                    )}
                    <p className="text-primary-taupe mb-2">{exp.description}</p>
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-primary-beige text-primary-taupe rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card bg-primary-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-beige"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-beige rounded-lg flex-shrink-0">
                  {exp.logo ? (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNFMkUyRTIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0FBQUFBQSIgZm9udC1zaXplPSIxMiI+TG9nbzwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  ) : (
                    exp.icon
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading2 text-primary-dark mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-primary-taupe mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span>{exp.period}</span>
                    {exp.location && <span>{exp.location}</span>}
                  </div>
                  <p className="text-primary-taupe mb-2">{exp.description}</p>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-primary-beige text-primary-taupe rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
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

export default Experience; 