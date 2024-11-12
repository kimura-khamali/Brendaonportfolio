import Brenda from '../../../src/Brendas_profile.jpg';
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Skills from '../Skills';
import Contact from '../Contact';
import './index.css';
import ProjectShowcase from '../Project';
import Footer from '../Footer';

const PortfolioSummary = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Brenda_CV.pdf';
    link.download = 'Brenda_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="left-content">
            <div className="header-section">
              <h2 className="intro-subtitle">Software Engineer</h2>
              <h1 className="name-title">Brenda Khamali</h1>
              <h2 className="role-title">Full Stack Developer</h2>
            </div>

            <p className="intro-text">
            Hello everyone, I'm Brenda Khamali, a passionate Software Engineer 
            specializing in full-stack development. I thrive on creating exceptional
            digital experiences using modern web technologies like React and Node.js.
            With a strong commitment to continuous learning and collaboration, 
            I’m excited to be able to contribute to innovative projects that make a difference.
            </p>

            <div className="social-links">
              <button 
                onClick={() => window.open('https://github.com/kimura-khamali', '_blank')}
                className="social-button"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/brenda-khamali-61ba312b2/', '_blank')}
                className="social-button"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </button>
              <button 
                onClick={() => window.open('mailto:kimurakhamali@gmail.com')}
                className="social-button"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="download-button"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="profile-image-container">
            <img
              src={Brenda}
              alt="Brenda Khamali"
              className="profile-image"
            />
          </div>
        </div>

        <Skills />
       
      </main>
      <ProjectShowcase/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default PortfolioSummary;