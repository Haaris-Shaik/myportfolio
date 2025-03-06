import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "NextJS",
    "express",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Postman"
];

const labelsSecond = [
    "Python",
    "SQL",
    "Pandas",
    "Numpy",
    "Jupyter Notebook",
    "Matplotlib",
    "Seaborn",
    "PowerBI",
    "Tableau",
    "Scikit-learn",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">

                <div className="skill">
                {/* <FontAwesomeIcon icon={faLaptopCode} size="3x"/> */}
                    <h3>Data Science</h3>
                    <p>Skilled in data analysis, machine learning, data visualization, and statistical modeling, with expertise in Python, SQL, and tools like Tableau and Power BI to transform data into actionable insights and solve complex business problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
