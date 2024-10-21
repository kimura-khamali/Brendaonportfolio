// import React from 'react';
// import { Github, Linkedin, Mail, Download, Code, Smartphone, Database, LineChart, Search, Layout } from 'lucide-react';
// import './index.css';
// import Brenda from '../../../src/Brendas_profile.jpg';

// const PortfolioSummary = () => {
//   const skills = [
//     { icon: <Layout size={24} />, title: 'Web Design', desc: 'Creating beautiful, responsive websites' },
//     { icon: <Smartphone size={24} />, title: 'Android Developer', desc: 'Building mobile applications' },
//     { icon: <Database size={24} />, title: 'Backend Developer', desc: 'Developing robust server solutions' },
//     { icon: <Code size={24} />, title: 'Product Manager', desc: 'Leading product development' },
//     { icon: <Search size={24} />, title: 'UX Researcher', desc: 'Understanding user needs' },
//     { icon: <LineChart size={24} />, title: 'Data Science', desc: 'Analyzing and visualizing data' }
//   ];

//   return (
//     <div className="portfolio-container">
//       <main className="main-content">
//         <div className="hero-section">
//           <div className="profile-image-container">
//             <img 
//               src={Brenda} 
//               alt="Profile" 
//               className="profile-image"
//             />
//           </div>
//           <h1>Brenda Khamali</h1>
//           <h2>Software Engineer</h2>
          
//           <div className="intro-text">
//             <p>
//               Hello everyone, my name is Brenda Khamali. I'm a Software Engineer,
//               passionate about creating digital experiences.
//             </p>
//             <p className="italic">
//               Where web development is the home of talent for everyone.
//             </p>
//           </div>

//           <div className="social-links">
//             <button onClick={() => window.open('https://github.com/yourusername', '_blank')} 
//                     className="social-button">
//               <Github size={24} />
//             </button>
//             <button onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')} 
//                     className="social-button">
//               <Linkedin size={24} />
//             </button>
//             <button onClick={() => window.open('mailto:your.email@example.com')} 
//                     className="social-button">
//               <Mail size={24} />
//             </button>
//           </div>
//         </div>

//         <section className="skills-section">
//           <h3>Web Involvement</h3>
//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <div key={index} className="skill-card">
//                 <div className="skill-header">
//                   <div className="skill-icon">
//                     {skill.icon}
//                   </div>
//                   <h4>{skill.title}</h4>
//                 </div>
//                 <p>{skill.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="cta-section">
//           <button onClick={() => {}}
//                   className="download-button">
//             <Download size={20} />
//             Download CV
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PortfolioSummary;






import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Smartphone, Database, LineChart, Search, Layout } from 'lucide-react';
import './index.css';
import Brenda from '../../../src/Brendas_profile.jpg';

const PortfolioSummary = () => {
  const skills = [
    { icon: <Layout size={24} />, title: 'Web Design', desc: 'Creating beautiful, responsive websites' },
    { icon: <Smartphone size={24} />, title: 'Android Developer', desc: 'Building mobile applications' },
    { icon: <Database size={24} />, title: 'Backend Developer', desc: 'Developing robust server solutions' },
    { icon: <Code size={24} />, title: 'Product Manager', desc: 'Leading product development' },
    { icon: <Search size={24} />, title: 'UX Researcher', desc: 'Understanding user needs' },
    { icon: <LineChart size={24} />, title: 'Data Science', desc: 'Analyzing and visualizing data' }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Brenda_CV.pdf'; // Make sure this path is correct
    link.download = 'Brenda_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-container">
      <main className="main-content">
        <div className="hero-section">
          <div className="profile-image-container">
            <img
              src={Brenda}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h1>Brenda Khamali</h1>
          <h2>Software Engineer</h2>
          <div className="intro-text">
            <p>
              Hello everyone, my name is Brenda Khamali. I'm a Software Engineer,
              passionate about creating digital experiences.
            </p>
            <p className="italic">
              Where web development is the home of talent for everyone.
            </p>
          </div>
          <div className="social-links">
            <button onClick={() => window.open('https://github.com/kimura-khamali', '_blank')}
              className="social-button">
              <Github size={24} />
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/brenda-khamali-61ba312b2/', '_blank')}
              className="social-button">
              <Linkedin size={24} />
            </button>
            <button onClick={() => window.open('mailto:kimurakhamali@gmail.com')}
              className="social-button">
              <Mail size={24} />
            </button>
          </div>
        </div>
        <section className="skills-section">
          <h3>Web Involvement</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h4>{skill.title}</h4>
                </div>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="cta-section">
        <button onClick={handleDownload}
          className="download-button">
          <Download size={20} />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default PortfolioSummary;











// import React from "react";

// // import { Link } from 'react-router-dom';
// import "./index.css";

// function PortfolioSummary() {
//   return (
//     <div className="portfolio-summary">
//       {/* <header>
//             <nav>
//               <Link to="/">Home</Link>
//               <Link to="/cv">CV</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </nav>
//           </header> */}

//       <main>
//         <h1>Brenda Khamali</h1>
//         <h2>Software Engineer</h2>

//         <section className="intro">
//           <p>
//             Hello everyone, my name is Brenda Khamali. I'm a Software Engineer,
//             passionate about creating digital experiences.
//           </p>
//           <p>Where web development is the home of talent for everyone.</p>
//         </section>

//         <section className="web-involvement">
//           <h3>Web Involvement</h3>
//           <ul>
//             <li>Web Design</li>
//             <li>Andriod Developer</li>
//             <li>Backend Developer</li>
//             <li>Product Manager</li>
//             <li>UX researcher</li>
//             <li>Data Science</li>
//           </ul>
//         </section>

//         {/* <section className="future-design">
//               <h3>Future Leads in Design</h3>
//               <p>Imagination creates creativity</p>
//             </section> */}

//         <button className="download-cv">Download CV</button>
//       </main>
//     </div>
//   );
// }

// export default PortfolioSummary;
