import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
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
    <div className="bg-primary-white">
      {showHeader && <Header />}
      <main>
        <Home onAnimationComplete={handleAnimationComplete} />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="awards">
          <Award />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
