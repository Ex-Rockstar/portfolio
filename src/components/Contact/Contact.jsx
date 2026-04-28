import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Web3Forms as the user has an active dashboard for it
      const payload = {
        access_key: "52b7c167-42c1-4d1a-bc8f-ebfb714beace", 
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Web3Forms Error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      value: "ruthirockstar2218@gmail.com",
      link: "mailto:ruthirockstar2218@gmail.com",
      color: "bg-primary-pink"
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      color: "bg-primary-yellow"
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Phone",
      value: "+91 9486308851",
      link: "tel:+919486308851",
      color: "bg-primary-blue"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/ruthi-shankari/",
      label: "LinkedIn",
      color: "bg-primary-green"
    },
    {
      icon: <FaGithub className="w-8 h-8" />,
      link: "https://github.com/Ex-Rockstar",
      label: "GitHub",
      color: "bg-primary-orange"
    }
  ];

  return (
    <div id="contact" className="py-20 bg-primary-light relative overflow-hidden border-t-8 border-b-8 border-primary-dark">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-pink rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-blue border-4 border-primary-dark shadow-brutal px-8 py-4 rotate-2 hover:-rotate-1 transition-transform cursor-pointer mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-primary-light uppercase tracking-tighter">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-dark font-medium max-w-2xl mx-auto bg-primary-yellow border-4 border-primary-dark shadow-brutal-sm p-4 rotate-1 font-body">
            Let's collaborate on innovative solutions and groundbreaking research. Slide into my inbox.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information & Socials */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className={`flex items-start gap-4 p-6 ${info.color} border-4 border-primary-dark shadow-brutal hover:shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 cursor-pointer w-full flex-col sm:flex-row text-center sm:text-left`}
              >
                <div className="p-4 bg-primary-light border-4 border-primary-dark rounded-full group-hover:rotate-12 transition-transform shadow-brutal-sm mb-4 sm:mb-0 mx-auto sm:mx-0">
                  {info.icon}
                </div>
                <div className="flex-1 w-full bg-primary-light border-4 border-primary-dark p-4 shadow-inner">
                  <h3 className="text-lg font-heading font-black text-primary-dark uppercase mb-1">{info.title}</h3>
                  <p className="text-primary-dark font-body font-bold break-all group-hover:underline decoration-2 underline-offset-4">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="flex justify-center sm:justify-start gap-4 mt-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-4 ${social.color} border-4 border-primary-dark shadow-brutal-sm hover:translate-y-1 hover:shadow-[2px_2px_0px_#1A1A1A] transition-all duration-300 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0`}
                >
                  <div className="text-primary-dark hover:scale-110 transition-transform">
                    {React.cloneElement(social.icon, { className: 'w-8 h-8' })}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="lg:w-2/3 bg-primary-pink border-4 border-primary-dark shadow-brutal p-8 md:p-12 relative"
          >
            {/* Playful tape on form */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-primary-dark/80 rotate-2 z-20"></div>

            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="w-full relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name (Make it glorious)"
                    className="w-full bg-primary-light border-4 border-primary-dark px-4 py-4 font-body font-bold text-primary-dark placeholder-primary-dark/50 focus:outline-none focus:shadow-brutal-sm transition-shadow transform group-hover:-translate-y-1 block shadow-[4px_4px_0px_#1A1A1A]"
                  />
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-primary-yellow border-l-4 border-primary-dark pointer-events-none rounded-r-sm hidden sm:block"></div>
                </div>
                <div className="w-full relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email Addy"
                    className="w-full bg-primary-light border-4 border-primary-dark px-4 py-4 font-body font-bold text-primary-dark placeholder-primary-dark/50 focus:outline-none focus:shadow-brutal-sm transition-shadow transform group-hover:-translate-y-1 block shadow-[4px_4px_0px_#1A1A1A]"
                  />
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-primary-blue border-l-4 border-primary-dark pointer-events-none rounded-r-sm hidden sm:block"></div>
                </div>
              </div>

              <div className="w-full relative group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject (Yell it out)"
                  className="w-full bg-primary-light border-4 border-primary-dark px-4 py-4 font-body font-bold text-primary-dark placeholder-primary-dark/50 focus:outline-none focus:shadow-brutal-sm transition-shadow transform group-hover:-translate-y-1 block shadow-[4px_4px_0px_#1A1A1A]"
                />
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-primary-green border-l-4 border-primary-dark pointer-events-none rounded-r-sm hidden sm:block"></div>
              </div>

              <div className="w-full relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message (Write an opus)"
                  className="w-full bg-primary-light border-4 border-primary-dark px-4 py-4 font-body font-bold text-primary-dark placeholder-primary-dark/50 focus:outline-none focus:shadow-brutal-sm transition-shadow transform group-hover:-translate-y-1 resize-y shadow-[4px_4px_0px_#1A1A1A] block max-h-64"
                ></textarea>
                {/* Decorative lines on textarea */}
                <div className="absolute top-0 right-0 bottom-2 w-4 bg-primary-orange border-l-4 border-primary-dark pointer-events-none hidden sm:block rounded-tr-sm"></div>
                <div className="absolute bottom-2 right-0 left-0 h-4 bg-primary-orange border-t-4 border-primary-dark pointer-events-none rounded-bl-sm hidden sm:block"></div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-primary-yellow text-primary-dark border-4 border-primary-dark px-8 py-4 font-heading font-black text-xl uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-brutal hover:shadow-brutal-sm hover:translate-y-1 hover:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed group rotate-1 hover:rotate-0 mt-4 mx-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-4 border-primary-dark border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <>
                    <span className="group-hover:tracking-widest transition-all">Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform w-6 h-6" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 2 }}
                  className="w-full text-center text-primary-dark bg-primary-green border-4 border-primary-dark p-4 font-body font-bold uppercase tracking-wide mt-4 shadow-brutal-sm"
                >
                  Message sent successfully! ✨
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, rotate: -2 }}
                  className="w-full text-center text-primary-light bg-primary-dark border-4 border-[#ff0000] p-4 font-body font-bold uppercase tracking-wide mt-4 shadow-brutal-sm"
                >
                  Oops! Something went wrong. 🚨
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;