import React, { useState, useEffect } from 'react';
import './About.css';
import profileImage from './images/IMG-20250131-WA0028_1.jpg';



export default function About() {
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', '.NET Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      
      setRole(isDeleting 
        ? fullText.substring(0, role.length - 1) 
        : fullText.substring(0, role.length + 1));
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && role === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && role === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [role, isDeleting, loopNum]);

  return (
    <section className="about-section" id="about">
      <div className="about-section-container">
        <div className="about-section-header">
          <h1 className="about-section-title">About me</h1>
          <h2 className="about-section-subtitle">—— who i am ——</h2>
        </div>
        
        <div className="about-section-content">
          <div className="about-section-image">
            <img 
              src={profileImage} 
              alt="Haris Hamayun"
              className="about-profile-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
              }}
            />
          </div>
          
          <div className="about-section-text">
            <h3 className="about-intro-title">
              I'm <span className="about-name-highlight">Haris Hamayun</span> and I'm a{' '}
              <span className="about-animated-role">
                {role}
                <span className="about-typing-cursor">|</span>
              </span>
            </h3>
            <p className="about-intro-paragraph">
              Hi! I'm a dedicated Software Engineer and .NET Developer with a passion for building clean, efficient, and user-friendly web applications. I have solid experience in both backend and frontend development, making me confident in delivering full-stack solutions.
            </p>
            <p className="about-intro-paragraph">
              On the backend, I work with C#, ASP.NET Core, and SQL Server to create secure and scalable systems. On the frontend, I use HTML, CSS, JavaScript, and React to craft responsive and engaging user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}