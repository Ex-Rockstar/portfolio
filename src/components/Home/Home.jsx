import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FloatingShape = ({ color, size, top, left, delay, duration, shape = "circle" }) => {
  const isSquare = shape === "square";
  const isTriangle = shape === "triangle";

  return (
    <motion.div
      className={`absolute mix-blend-multiply opacity-60 pointer-events-none`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top: top,
        left: left,
        borderRadius: isSquare ? '0px' : isTriangle ? '0px' : '50%',
        clipPath: isTriangle ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
        zIndex: 0,
        boxShadow: isSquare ? '8px 8px 0px 0px rgba(26,26,26,1)' : 'none',
        border: isSquare ? '4px solid #1A1A1A' : 'none',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: isSquare || isTriangle ? [0, 90, 180, 270, 360] : 0,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

const Home = ({ onAnimationComplete }) => {
  const [introComplete, setIntroComplete] = useState(false);

  const TitleWord = ({ text, delay }) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="inline-block mr-4 font-heading font-black text-6xl sm:text-7xl md:text-9xl tracking-tighter uppercase text-primary-dark"
      style={{ textShadow: '4px 4px 0px #FF2E93, 8px 8px 0px #1A1A1A' }}
    >
      {text}
    </motion.div>
  );

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -100;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-primary-light overflow-hidden selection:bg-primary-yellow selection:text-primary-dark">
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
              setIntroComplete(true);
              if (onAnimationComplete) onAnimationComplete();
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark text-primary-light"
          >
            <div className="flex flex-col items-center gap-2 overflow-hidden">
              {["AI RESEARCHER", "SOFTWARE ENGINEER", "GEN-AI DEV", "ML ENTHUSIAST"].map((text, i) => (
                <motion.h1
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                  exit={{ y: -100, opacity: 0 }}
                  className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter"
                  style={{ textShadow: `4px 4px 0px ${['#FF2E93', '#00E5FF', '#00FF66', '#FFD700'][i]}` }}
                >
                  {text}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 md:px-12 z-10 w-full max-w-7xl mx-auto items-start">

        {/* Floating Background Elements */}
        <FloatingShape color="#FFD700" size="300px" top="-5%" left="-10%" delay={0} duration={6} />
        <FloatingShape color="#00E5FF" size="400px" top="40%" left="60%" delay={1} duration={8} shape="square" />
        <FloatingShape color="#FF2E93" size="200px" top="70%" left="10%" delay={2} duration={5} />
        <FloatingShape color="#00FF66" size="150px" top="20%" left="80%" delay={3} duration={7} shape="triangle" />

        <div className="relative z-10 mt-20 md:mt-0 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block bg-primary-yellow text-primary-dark font-bold px-4 py-1 border-2 border-primary-dark shadow-brutal-sm mb-6 -rotate-3 hover:rotate-3 transition-transform cursor-default"
          >
            Creative Mode Active 🚀
          </motion.div>

          <div className="flex flex-wrap mb-6 leading-none">
            <TitleWord text="HEY," delay={1.0} />
            <TitleWord text="I'M" delay={1.2} />
            <br />
            <TitleWord text="RUTHIKA" delay={1.4} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-xl sm:text-2xl text-primary-dark font-medium max-w-2xl mb-10 leading-relaxed border-l-4 border-primary-pink pl-4 bg-primary-light/50 backdrop-blur-sm p-4"
          >
            A passionate <span className="text-primary-purple font-bold">AI researcher</span> and <span className="text-primary-orange font-bold">software engineer</span> specializing in machine learning and generative AI. Currently working on innovative solutions in healthcare and mental wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary-green text-primary-dark font-heading font-bold text-xl uppercase tracking-wider border-4 border-primary-dark shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-brutal-sm active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all"
            >
              Explore My Journey
            </button>

            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/Ex-Rockstar", color: "bg-primary-blue" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/ruthi-shankari", color: "bg-primary-yellow" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 flex items-center justify-center ${social.color} border-4 border-primary-dark shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all`}
                >
                  <social.icon className="w-6 h-6 text-primary-dark" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 right-12 hidden md:block"
        >
          <div className="animate-spin-slow p-4 bg-primary-pink rounded-full border-4 border-primary-dark shadow-brutal flex items-center justify-center -rotate-12 border-dashed">
            <span className="font-heading font-black text-2xl text-primary-light">↓ SCROLL ↓</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
