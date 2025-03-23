import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full fixed top-0 left-0 text-primary-dark z-50'>
      <div className='md:flex bg-primary-white py-4 px-9 font-body text-2xl'>
        {/* Brand Name - stays on the left */}
        <div className='flex items-center cursor-pointer' onClick={() => scrollToSection('home')}>
          <ion-icon name="sparkles"></ion-icon>
          Ruthika
        </div>

        {/* Links - align right */}
        <div className='ml-auto flex items-center space-x-6'>
          <button onClick={() => scrollToSection('home')} className="hover:text-primary-burgundy transition-colors duration-300">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary-burgundy transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-primary-burgundy transition-colors duration-300">Experience</button>
          <button onClick={() => scrollToSection('certificates')} className="hover:text-primary-burgundy transition-colors duration-300">Certificates</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary-burgundy transition-colors duration-300">Projects</button>
          <button onClick={() => scrollToSection('awards')} className="hover:text-primary-burgundy transition-colors duration-300">Awards</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary-burgundy transition-colors duration-300">Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Header