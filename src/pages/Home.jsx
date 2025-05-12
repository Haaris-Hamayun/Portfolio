import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from './images/IMG_20211111_122752_542.jpg';

export default function Home() {
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
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, my name is</h3>
        <h1>Haris Hamayun</h1>
        <h2>And I'm a <span className="highlight">{role}</span>
          <span className="typing-cursor">|</span>
        </h2>
        <button className="hire-me-btn">Hire Me</button>
      </div>
      <img 
        src={profileImage} 
        alt="Haris Hamayun" 
        className="home-image" 
      />
    </section>
  );
}