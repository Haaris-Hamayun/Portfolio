import React, { useEffect } from 'react';
import './Services.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiSearch, FiZap } from 'react-icons/fi';

function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive interfaces with React, Next.js, and modern CSS.",
      icon: <FiCode className="service-icon-svg" />,
      color: "#6c63ff"
    },
    {
      title: "Backend Development",
      description: "Developing robust APIs using .NET Core, Node.js, and databases.",
      icon: <FiServer className="service-icon-svg" />,
      color: "#ff6584"
    },
    {
      title: "Code Review",
      description: "Improving code quality, performance, and maintainability.",
      icon: <FiSearch className="service-icon-svg" />,
      color: "#20c997"
    },
    {
      title: "Optimization",
      description: "Enhancing application speed and efficiency.",
      icon: <FiZap className="service-icon-svg" />,
      color: "#f9a826"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">--- What I Provide ---</p>
        </motion.div>

        <motion.div 
          className="services-row"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              style={{ borderTop: `4px solid ${service.color}` }}
            >
              <motion.div 
                className="service-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;