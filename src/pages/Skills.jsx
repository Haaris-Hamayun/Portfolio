import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 90, color: "#f0db4f" },
  { name: "React", level: 85, color: "#61dbfb" },
  { name: "HTML/CSS", level: 95, color: "#e34c26" },
  { name: "ASP.NET Core", level: 80, color: "#512bd4" },
  { name: "C#", level: 85, color: "#178600" },
  { name: "Python", level: 75, color: "#3776ab" },  // Added Python
  { name: "SQL Server", level: 75, color: "#cc2927" },
  { name: "Node.js", level: 70, color: "#68a063" },
  { name: "MongoDB", level: 65, color: "#4DB33D" },
  { name: "Entity Framework", level: 75, color: "#512bd4" },
  { name: "Web Api", level: 77, color: "black" },
  { name: "Git", level: 80, color: "#f34f29" }
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">--- Technologies I work with ---</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}