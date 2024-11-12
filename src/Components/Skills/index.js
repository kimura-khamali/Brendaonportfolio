import React, { useState } from 'react';
import { Code, Palette, Database, Users, Wrench} from 'lucide-react';
import './index.css';
import cv from '../../assets/Brenda Khamali Kimura Cv.png';
import calculator from '../../assets/Calculator Design.png';
import anuru from '../../assets/anuru.jpg';
import logo from '../../assets/logo design.png';
import design from '../../assets/design.jpeg'
import traditional from '../../assets/Traditional food (1).png'
import dashboard from '../../assets/dashboard.png'
import portfolio from '../../assets/portfolio.png'
import data from '../../assets/data cleaning.png'
import sql from '../../assets/postgres - Magezi_table.png'
import postdetails from '../../assets/postman.png'
import authentication from '../../assets/authentication.png'
import order from '../../assets/order.png'
import document from '../../assets/documentation.png'
import jira from '../../assets/jira.png'


const CollageView = ({ category, onClose }) => {
    const projectsByCategory = {
        "Programming Languages": [
            { title: "Welcome", image: design, description: "Data analysis project using pandas" },
            
        ],
        "Web Development": [
            { title: "Traditional", image: traditional, description: "Traditional food sight" },
            { title: "Portfolio Website", image: portfolio, description: "Responsive personal portfolio" },
            { title: "Dashboard UI", image: dashboard, description: "Admin dashboard interface" }
        ],
        "Backend & Databases": [
            { title: "Database Design", image: data, description: "Complex SQL database schema" },
            { title: "Database Design", image: sql, description: "Complex SQL database schema" },
            { title: "Authentication System", image: postdetails, description: "Secure user auth system" }
        ],
        "Mobile Development": [
            { title: "Authentication", image: authentication, description: "Suubi Authentication app" },
            { title: "Saving Up", image: order, description: "Saving app" },
        ],
        "Design & Tools": [
            { title: "CV design", image: cv, description: "Complete brand package" },
            { title: "Calculator", image: calculator, description: "Component library design" },
            { title: "Mock Up", image: anuru, description: "Component library design" },
            { title: "Logo Collection", image: logo, description: "Various client logos" }
        ],
        "Soft Skills & Methodologies": [
            { title: "Documentation", image: document, description: "Technical documentation" },
            { title: "Sprint Planning", image: jira, description: "Project management" }
        ]
    };

    const projects = projectsByCategory[category.title] || [];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        {category.icon}
                        {category.title}
                    </h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        ×
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="project-image w-full h-48 object-cover cursor-pointer"
                                onClick={() => {/* Add code to show full image if needed */}}
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkillCategory = ({ title, icon, skills, onClick }) => (
    <div className="skill-category" onClick={onClick}>
        <div className="skill-header">
            {icon}
            <h3>{title}</h3>
        </div>
        <ul className="skill-list">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="skill-icon" />,
            skills: [
                "Proficient in Kotlin, Python, and JavaScript",
                "Strong understanding of data types and structures",
                "Experience with object-oriented programming"
            ]
        },
        {
            title: "Web Development",
            icon: <Palette className="skill-icon" />,
            skills: [
                "HTML, CSS, and JavaScript fundamentals",
                "React and DOM manipulation",
                "Responsive design and UI/UX principles",
                "API integration and asynchronous programming"
            ]
        },
        {
            title: "Backend & Databases",
            icon: <Database className="skill-icon" />,
            skills: [
                "Django Framework expertise",
                "SQL and database management",
                "RESTful API design and implementation"
            ]
        },
        {
            title: "Mobile Development",
            icon: <Code className="skill-icon" />,
            skills: [
                "Android development concepts",
                "Activity views, binding, and intents",
                "Mobile UI/UX design principles"
            ]
        },
        {
            title: "Design & Tools",
            icon: <Wrench className="skill-icon" />,
            skills: [
                "Figma, Adobe Illustrator, and Photoshop",
                "Logo design and mockup creation",
                "Version control with Git and GitHub"
            ]
        },
        {
            title: "Soft Skills & Methodologies",
            icon: <Users className="skill-icon" />,
            skills: [
                "Agile and Scrum methodologies",
                "Sprint planning and retrospectives",
                "Collaboration and code review processes"
            ]
        }
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-title">My Skill Set</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        {...category}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>
            {selectedCategory && (
                <CollageView
                    category={selectedCategory}
                    onClose={() => setSelectedCategory(null)}
                />
            )}
        </div>
    );
};

export default Skills;

