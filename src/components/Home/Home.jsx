import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = ({ onAnimationComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const comp = useRef(null);
  const buttonRef = useRef(null);
  const hasAnimated = useRef(false);
  const mainContentRef = useRef(null);

  useLayoutEffect(() => {
    if (hasAnimated.current) return;
    
    const ctx = gsap.context(() => {
      // Hide main content initially
      if (mainContentRef.current) {
        gsap.set(mainContentRef.current, { opacity: 0 });
      }

      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: -100,
          duration: 1.3,
          onComplete: () => {
            setIntroComplete(true);
          }
        })
        .to(mainContentRef.current, {
          opacity: 1,
          duration: 1,
          onComplete: () => {
            setShowContent(true);
            hasAnimated.current = true;
            if (onAnimationComplete) {
              onAnimationComplete();
            }
          }
        });
    }, comp);
    
    return () => ctx.revert();
  }, [onAnimationComplete]);

  useEffect(() => {
    if (showContent) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
      });
    }
  }, [showContent]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80; // Offset to account for fixed header
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative min-h-screen" ref={comp}>
        {!introComplete && (
          <div
            id="intro-slider"
            className="bg-gradient-to-r from-primary-dark to-primary-burgundy text-primary-white h-screen p-4 sm:p-6 md:p-10 absolute top-0 left-0 font-heading2 z-10 w-full flex flex-col justify-center gap-4 sm:gap-6 md:gap-10 tracking-tight"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl" id="title-1">
              AI Researcher.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl" id="title-2">
              Software Engineer.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl" id="title-3">
              GenAI Developer.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl" id="title-4">
              ML Enthusiast.
            </h1>
          </div>
        )}
        <div ref={mainContentRef} className="min-h-screen flex flex-col bg-primary-white justify-center items-center relative px-4 sm:px-6 md:px-8">
          <div className="text-center w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading1 text-primary-dark mb-4">
              Hey, I'm Ruthika
            </h1>
            <p className="text-lg sm:text-xl text-primary-taupe max-w-2xl mx-auto mb-8 px-4">
              A passionate AI researcher and software engineer specializing in machine learning and generative AI.
              Currently working on innovative solutions in healthcare and mental wellness.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/Ex-Rockstar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-taupe hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a 
                href="https://linkedin.com/in/ruthi-shankari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-taupe hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-taupe hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>
            <button
              ref={buttonRef}
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-dark to-primary-burgundy text-primary-white rounded-lg text-lg sm:text-xl font-body hover:from-primary-burgundy hover:to-primary-taupe transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              Explore My Journey
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <svg className="w-6 h-6 text-primary-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
