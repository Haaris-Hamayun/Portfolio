// Contact.js
import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const iconVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 120 }
  })
};

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title contact-title">Contact Me</h1>
          <h2 className="section-subtitle">--- Get In Touch ---</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div className="contact-text" variants={iconVariant} custom={0}>
              <p>
                Let's collaborate on your next project! Whether it's building features,
                optimizing systems, or ideating fresh solutions, I'm here to turn ideas into reality.
              </p>
              <p>
                With hands-on experience delivering robust software, I guarantee a partnership
                that delivers excellence. Reach out and let's make something amazing together.
              </p>
            </motion.div>

            <div className="contact-details">
              {[
                { icon: FaMapMarkerAlt, label: 'Address', value: 'Lahore, Pakistan' },
                { icon: FaEnvelope, label: 'Email', value: 'devghufran78@gmail.com' },
                { icon: FaPhone, label: 'Phone No', value: '+92 324 4562896' },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect with me', link: 'https://linkedin.com/in/yourprofile' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div className="detail-item" key={idx} variants={iconVariant} custom={idx + 1}>
                    <Icon className="contact-icon" />
                    <div>
                      <h4>{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              {['Your Name', 'Your Email', 'Subject'].map((placeholder, idx) => (
                <div className="form-group" key={idx}>
                  <motion.input
                    type={placeholder.includes('Email') ? 'email' : 'text'}
                    placeholder={placeholder}
                    required={placeholder !== 'Subject' ? true : false}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>
              ))}

              <div className="form-group">
                <motion.textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ y: -3, boxShadow: '0px 10px 20px rgba(108,99,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;