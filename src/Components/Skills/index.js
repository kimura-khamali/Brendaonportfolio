import React from 'react';

function Skills() {
  const skills = [' Knowledgeable in Kotlin, python, and Javascript, including their data types',
  'Understanding different data structures such as tuples, lists, and dictionaries.',
   'Ability to perform basic web development principles, including HTML, CSS, and JavaScript.',
   'Experience using design tools such as Figma, Adobe Illustrator and Photoshop',
   'Ability to design products, from logo design to mockups and mobile designs.',
  'Ability to fetch API and DOM manipulation using both Javascript and React with an understanding of asynchronous concepts',
  'Knowledge of database and SQL',
   'Be able to use version control systems such as Git and GitHub, including being able to collaborate, pull requests, and code review.',
  'Understanding of Andriod development concepts such as activity views like binding and intent',
   'Knowledge of  the Django Framework in Python.',
  'Knowledge  in responsive design and UI/UX principles with experience in Frontend development',
   'Experience with Scrum, sprint planning, and conducting retrospectives.',
  'Knowledge of object-oriented programming in Python, JavaScript, and Kotlin.'];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;