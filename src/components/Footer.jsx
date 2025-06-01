import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Replace these with your actual profile URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/haris-hamayun/",
    github: "https://github.com/Haaris-Hamayun",
    email: "mailto:haris1122hamayun@gmail.com"
  };
  return (
    <footer className="footer">
      <div className="social-links">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
            alt="LinkedIn" 
            className="social-icon"
          />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
            className="social-icon"
          />
        </a>
        <a href={socialLinks.email}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png" 
            alt="Email" 
            className="social-icon"
          />
        </a>
      </div>
      <p className="copyright">© {currentYear} All Rights Reserved</p>
    </footer>
  );
}