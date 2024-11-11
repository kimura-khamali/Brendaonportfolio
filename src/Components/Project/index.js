import React from 'react';
// import shawazi from '../assets/shawazi.png';
import shawazi from '../../assets/shawazi.png'
import shawazi_product from '../../assets/shaproduct.png'
import Suubi from '../../assets/suubi.png'
import Akili from '../../assets/akili.png'
import Evogreen from '../../assets/evogreen.png'
import './index.css'; 

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Magezi Informational',
      screenshot: shawazi,
      link: 'https://magezi-informational-c594.vercel.app/'
    },
    {
      title: 'Shawazi',
      screenshot: shawazi_product,
      link: 'https://shawazi-magezi.vercel.app/'
    },
    {
      title: 'Suubi',
      screenshot: Suubi,
      link: 'https://my-suubi-webpage.vercel.app/'
    },
    {
      title: 'Akili',
      screenshot: Akili,
      link: 'https://akili-quiz.vercel.app/'
    },
    {
      title: 'Magezi Informational',
      screenshot: shawazi,
      link: 'https://magezi-informational-c594.vercel.app/'
    },
    {
      title: 'Shawazi',
      screenshot: shawazi_product,
      link: 'https://shawazi-magezi.vercel.app/'
    },
    {
      title: 'Suubi',
      screenshot: Suubi,
      link: 'https://my-suubi-webpage.vercel.app/'
    },
    {
      title: 'Evogreen',
      screenshot: Evogreen,
      link: 'https://akili-plants.vercel.app/'
    }
  ];

return (
    <div className="skills-section">
      <h2>My Projects</h2>
      <div className="skills-grid">
        {projects.map((project, index) => (
          <div key={index} className="skill-category">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="category-header">
                <span>{project.title}</span>
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;