import React, { useEffect, useRef } from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Award = () => {
  const awardsRef = useRef(null);

  const awards = [
    {
      icon: <FaTrophy className="text-2xl sm:text-3xl md:text-4xl text-primary-burgundy" />,
      title: "Best Research Paper Award",
      organization: "IEEE International Conference",
      year: "2023",
      description: "Awarded for groundbreaking research in AI-driven healthcare solutions."
    },
    {
      icon: <FaMedal className="text-2xl sm:text-3xl md:text-4xl text-primary-burgundy" />,
      title: "Innovation Excellence",
      organization: "Global Tech Summit",
      year: "2023",
      description: "Recognized for innovative contributions to mental health technology."
    },
    {
      icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl text-primary-burgundy" />,
      title: "Outstanding Student Researcher",
      organization: "Sri Sairam Engineering College",
      year: "2022",
      description: "Awarded for exceptional research work in machine learning applications."
    },
    {
      icon: <FaCertificate className="text-2xl sm:text-3xl md:text-4xl text-primary-burgundy" />,
      title: "Academic Excellence Award",
      organization: "Department of Computer Engineering",
      year: "2022",
      description: "Achieved highest academic performance in the department."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.award-card');
      
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }, awardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={awardsRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-white to-primary-beige">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading1 text-primary-dark mb-3 sm:mb-4">
            Awards & Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-taupe max-w-2xl mx-auto px-4">
            Recognition for excellence in research, innovation, and academic achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card bg-primary-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-beige"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-primary-beige rounded-lg flex-shrink-0">
                  {award.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-heading2 text-primary-dark mb-2 line-clamp-2">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-primary-taupe mb-2 sm:mb-3">
                    <span className="font-medium text-sm sm:text-base">{award.organization}</span>
                    <span className="text-primary-burgundy hidden sm:inline">•</span>
                    <span className="text-sm sm:text-base">{award.year}</span>
                  </div>
                  <p className="text-primary-taupe text-sm sm:text-base line-clamp-3">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;