import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top bottom-=100',
        }
      });

      gsap.from('.contact-info', {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top bottom-=100',
        }
      });

      gsap.from('.contact-form', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top bottom-=100',
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={contactRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-beige to-primary-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 contact-title">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading1 text-primary-dark mb-3 sm:mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-taupe max-w-2xl mx-auto px-4">
            Let's collaborate on innovative solutions and groundbreaking research.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="contact-info bg-primary-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="p-2 sm:p-3 bg-primary-beige rounded-lg">
                  <FaEnvelope className="text-xl sm:text-2xl text-primary-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading2 text-primary-dark mb-1">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-sm sm:text-base text-primary-taupe hover:text-primary-burgundy transition-colors duration-300">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info bg-primary-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="p-2 sm:p-3 bg-primary-beige rounded-lg">
                  <FaPhone className="text-xl sm:text-2xl text-primary-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading2 text-primary-dark mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-sm sm:text-base text-primary-taupe hover:text-primary-burgundy transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info bg-primary-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="p-2 sm:p-3 bg-primary-beige rounded-lg">
                  <FaMapMarkerAlt className="text-xl sm:text-2xl text-primary-burgundy" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading2 text-primary-dark mb-1">Location</h3>
                  <p className="text-sm sm:text-base text-primary-taupe">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="contact-info pt-6 sm:pt-8">
              <h3 className="text-lg sm:text-xl font-heading2 text-primary-dark mb-4">Connect with Me</h3>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="p-2 sm:p-3 bg-primary-beige rounded-lg hover:bg-primary-burgundy transition-colors duration-300 group">
                  <FaLinkedin className="text-xl sm:text-2xl text-primary-burgundy group-hover:text-primary-white" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                   className="p-2 sm:p-3 bg-primary-beige rounded-lg hover:bg-primary-burgundy transition-colors duration-300 group">
                  <FaGithub className="text-xl sm:text-2xl text-primary-burgundy group-hover:text-primary-white" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                   className="p-2 sm:p-3 bg-primary-beige rounded-lg hover:bg-primary-burgundy transition-colors duration-300 group">
                  <FaTwitter className="text-xl sm:text-2xl text-primary-burgundy group-hover:text-primary-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-primary-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-primary-dark font-medium mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary-beige focus:outline-none focus:border-primary-burgundy bg-primary-white text-primary-dark text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-primary-dark font-medium mb-1 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary-beige focus:outline-none focus:border-primary-burgundy bg-primary-white text-primary-dark text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base text-primary-dark font-medium mb-1 sm:mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary-beige focus:outline-none focus:border-primary-burgundy bg-primary-white text-primary-dark text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-primary-dark font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary-beige focus:outline-none focus:border-primary-burgundy bg-primary-white text-primary-dark text-sm sm:text-base resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-gradient-to-r from-primary-dark to-primary-burgundy text-primary-white rounded-lg text-sm sm:text-lg font-medium hover:from-primary-burgundy hover:to-primary-taupe transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;