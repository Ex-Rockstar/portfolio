import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Award from "./components/Award/Award";
import Contact from "./components/Contact/Contact";

import "./index.css";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleAnimationComplete = () => {
    setShowHeader(true);
  };

  return (
    <div className="min-h-screen bg-primary-white">
      {showHeader && <Header />}
      <main>
        <Home onAnimationComplete={handleAnimationComplete} />
        <About />
        <Projects />
        <Experience />
      
        <section id="certificates">
          <Certificates />
        </section>
        <section id="awards">
          <Award />
        </section>
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
