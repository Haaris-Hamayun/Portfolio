import "./header.css"
export default function Header({ scrollTo }) {
  return (
    <header className="header">
      <div className="header-content">
        {/* Portfolio text with red color */}
        <div className="logo">
          <span className="portfolio-text">Portfolio</span>
          <span className="red-dot">.</span>
        </div>
        
        {/* Navigation buttons with white color */}
        <nav className="nav-buttons">
          <button onClick={() => scrollTo.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Home
          </button>
          <button onClick={() => scrollTo.aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button onClick={() => scrollTo.servicesRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Services
          </button>
          <button onClick={() => scrollTo.skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Skills
          </button>
          <button onClick={() => scrollTo.contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </button>
        </nav>
      </div>
   </header>
  )
}