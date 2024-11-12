import React from 'react';
import { Code, Palette, Database, Users, Wrench } from 'lucide-react'; 
import './index.css'; 

const SkillCategory = ({ title, icon, skills }) => (
  <div className="skill-category">
    <div className="category-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="category-icon" />,
      skills: [
        "Proficient in Kotlin, Python, and JavaScript",
        "Strong understanding of data types and structures",
        "Experience with object-oriented programming"
      ]
    },
    {
      title: "Web Development",
      icon: <Palette className="category-icon" />,
      skills: [
        "HTML, CSS, and JavaScript fundamentals",
        "React and DOM manipulation",
        "Responsive design and UI/UX principles",
        "API integration and asynchronous programming"
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Database className="category-icon" />,
      skills: [
        "Django Framework expertise",
        "SQL and database management",
        "RESTful API design and implementation"
      ]
    },
    {
      title: "Mobile Development",
      icon: <Wrench className="category-icon" />, 
      skills: [
        "Android development concepts",
        "Activity views, binding, and intents",
        "Mobile UI/UX design principles"
      ]
    },
    {
      title: "Design & Tools",
      icon: <Wrench className="category-icon" />, 
      skills: [
        "Figma, Adobe Illustrator, and Photoshop",
        "Logo design and mockup creation",
        "Version control with Git and GitHub"
      ]
    },
    {
      title: "Soft Skills & Methodologies",
      icon: <Users className="category-icon" />,
      skills: [
        "Agile and Scrum methodologies",
        "Sprint planning and retrospectives",
        "Collaboration and code review processes"
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h2>My Skill Set</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
