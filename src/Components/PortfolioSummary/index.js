import React from "react";

// import { Link } from 'react-router-dom';
import './index.css'

function PortfolioSummary() {
    return (
        <div className="portfolio-summary">
          {/* <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/cv">CV</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </header> */}
          
          <main>
            <h1>Brenda Khamali</h1>
            <h2>Software Engineer</h2>
            
            <section className="intro">
              <p>Hello everyone, my name is Brenda Khamali. I'm a web developer passionate about creating digital experiences.</p>
              <p>Where web development is the home of talent for everyone.</p>
            </section>
    
            <section className="web-involvement">
              <h3>Web Involvement</h3>
              <ul>
                <li>Web Design</li>
                <li>Artistics</li>
                <li>Eye of the future</li>
              </ul>
            </section>
    
            <section className="future-design">
              <h3>Future Leads in Design</h3>
              <p>Imagination creates creativity</p>
            </section>
    
            <button className="download-cv">Download CV</button>
          </main>
        </div>
      );
}

export default PortfolioSummary;