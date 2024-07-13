import React from 'react';

function Experience() {
  const experiences = [
    {
      jobTitle: 'Job title',
      company: 'Company',
      description: 'job description',
      dates: 'Dates'
    },
    // Add more job experiences as needed
  ];

  return (
    <section className="experience">
      <h3>Experience</h3>
      {experiences.map((job, index) => (
        <div key={index} className="job">
          <h4>{job.jobTitle}</h4>
          <p>{job.company}</p>
          <p>{job.description}</p>
          <p>{job.dates}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;