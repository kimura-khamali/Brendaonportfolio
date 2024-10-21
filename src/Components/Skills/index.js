import React from 'react';
import { Code, Palette, Database, Users, Wrench } from 'lucide-react'; // Use 'Wrench' instead of 'Tool'
import './index.css'; // We'll define this CSS separately

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
      icon: <Wrench className="category-icon" />, // Changed icon to Wrench
      skills: [
        "Android development concepts",
        "Activity views, binding, and intents",
        "Mobile UI/UX design principles"
      ]
    },
    {
      title: "Design & Tools",
      icon: <Wrench className="category-icon" />, // Changed icon to Wrench
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





























// import React from 'react';

// function Skills() {
//   const skills = [' Knowledgeable in Kotlin, python, and Javascript, including their data types',
//   'Understanding different data structures such as tuples, lists, and dictionaries.',
//    'Ability to perform basic web development principles, including HTML, CSS, and JavaScript.',
//    'Experience using design tools such as Figma, Adobe Illustrator and Photoshop',
//    'Ability to design products, from logo design to mockups and mobile designs.',
//   'Ability to fetch API and DOM manipulation using both Javascript and React with an understanding of asynchronous concepts',
//   'Knowledge of database and SQL',
//    'Be able to use version control systems such as Git and GitHub, including being able to collaborate, pull requests, and code review.',
//   'Understanding of Andriod development concepts such as activity views like binding and intent',
//    'Knowledge of  the Django Framework in Python.',
//   'Knowledge  in responsive design and UI/UX principles with experience in Frontend development',
//    'Experience with Scrum, sprint planning, and conducting retrospectives.',
//   'Knowledge of object-oriented programming in Python, JavaScript, and Kotlin.'];

//   return (
//     <section className="skills">
//       <h3>Skills</h3>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default Skills;