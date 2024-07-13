import React from 'react';

function Education() {
  const education = [
    // {
    //   school: 'Kibera School for Girls (SHOFCO)',
    //   certificate: 'Kenya Certificate Of Primary Education(KCPE)',
    //   date: '11/23/2018'
    // },
    {
    //   school: 'kiongwani School For Girls',
    //   certificate: 'Kenya Certificate Of Secondary Education(KCSE)',
    //   date: '12/23/2022'
    school:'AkiraChix',
certificate:'Diploma in Information Technology (codeHive)',
Date:'February 2022-Present'

    }
  ];

  return (
    <section className="education">
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="edu-item">
          <h4>{edu.school}</h4>
          <p>{edu.certificate}</p>
          <p>{edu.date}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;