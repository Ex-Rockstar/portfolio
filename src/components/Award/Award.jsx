import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaStar, FaAward, FaMedal, FaTrophy } from 'react-icons/fa';

const Award = () => {
  const awards = [
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "NPTEL Believer",
      organization: "NPTEL",
      date: "Dec 2024",
      institution: "Sri Sairam Engineering College",
      description: "Completed 5 courses in a semester with course hours exceeding 50",
      color: "bg-primary-yellow"
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "NPTEL Discipline Star",
      organization: "NPTEL",
      date: "Dec 2024",
      institution: "Sri Sairam Engineering College",
      description: "Recognized for outstanding discipline and commitment to learning",
      color: "bg-primary-pink"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "NPTEL Motivated Learner",
      organization: "NPTEL",
      date: "Dec 2024",
      institution: "Sri Sairam Engineering College",
      description: "Acknowledged for exceptional motivation and dedication to learning",
      color: "bg-primary-blue"
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Star of UBA",
      organization: "Unnath Bharat Abiyan",
      date: "Nov 2024",
      institution: "Sri Sairam Engineering College",
      description: "Best outgoing student of the elite UBA Forum for dedication in the digital world of UBA",
      color: "bg-primary-green"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Thiruvalluvar Award - Head Volunteer",
      organization: "Sri Sairam Engineering College",
      date: "Nov 2023",
      institution: "Atal Innovation Mission Official",
      description: "Awarded for heading a huge team of 400+ students in a village survey",
      color: "bg-primary-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-white py-20 px-4 relative overflow-hidden border-t-8 border-primary-dark">
      {/* Background shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-blue rounded-none rotate-12 border-4 border-primary-dark opacity-50 mix-blend-multiply blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary-green rounded-full border-4 border-primary-dark opacity-50 mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary-orange border-4 border-primary-dark shadow-brutal px-8 py-4 -rotate-2 hover:rotate-1 transition-transform cursor-pointer mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-dark uppercase tracking-tighter">
              Honors & Awards
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-dark font-medium max-w-2xl mx-auto bg-primary-light border-4 border-primary-dark shadow-brutal-sm p-4 rotate-1 font-body">
            Recognition for turning chaos into functional, award-winning ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {awards.map((award, index) => {
            const rowIsEven = Math.floor(index / 2) % 2 === 0;
            const tilt = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                className={`flex flex-col md:flex-row bg-primary-light border-4 border-primary-dark shadow-brutal hover:shadow-[2px_2px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group ${tilt} hover:rotate-0`}
              >
                {/* Icon Section */}
                <div className={`p-8 ${award.color} border-b-4 md:border-b-0 md:border-r-4 border-primary-dark flex items-center justify-center shrink-0 w-full md:w-48 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A), linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}>
                  </div>
                  <div className="text-primary-dark transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 relative z-10 bg-primary-light border-4 border-primary-dark rounded-full p-4">
                    {award.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-primary-light relative z-10">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-primary-dark text-primary-light font-body font-bold text-xs uppercase tracking-wider shadow-brutal-sm -rotate-2">
                      {award.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-primary-dark leading-snug mb-2 group-hover:underline decoration-4 underline-offset-4">
                    {award.title}
                  </h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-primary-dark font-body font-bold text-sm bg-primary-yellow inline-block px-2 border-2 border-primary-dark self-start -rotate-1">
                      {award.organization}
                    </p>
                    <p className="text-primary-taupe font-body font-bold text-xs bg-primary-blue inline-block px-2 border-2 border-primary-dark self-start rotate-1">
                      {award.institution}
                    </p>
                  </div>
                  <p className="text-primary-dark font-body font-medium leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Award;