import React from "react";
import passop from '../assets/images/passop.png';
import house from '../assets/images/housing.png';
import classification from '../assets/images/classification.png';
import todo from '../assets/images/todo.png';
import t20 from '../assets/images/t20.png';
import simon from '../assets/images/simon.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Haaris-Shaik/password-manager" target="_blank" rel="noreferrer"><img src={passop} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Haaris-Shaik/password-manager" target="_blank" rel="noreferrer"><h2>PassOP</h2></a>
                <p>Designed and developed a password manager using React, Tailwind CSS with CRUD operations such that passwords are stored in the local storage</p>
            </div>
            <div className="project">
                <a href="https://github.com/Haaris-Shaik/HousePricePrediction/blob/main/Chapter_2_House_Pricing_Project/Housing.ipynb" target="_blank" rel="noreferrer"><img src={house} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Haaris-Shaik/HousePricePrediction/blob/main/Chapter_2_House_Pricing_Project/Housing.ipynb" target="_blank" rel="noreferrer"><h2>House Price Prediction using Multi-Regression </h2></a>
                <p>Designed and developed a machine learning model for house price prediction using Python, scikit-learn, numpy, pandas, seaborn, matplotlib.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Haaris-Shaik/NumberClassification/blob/main/Chapter_3_Classification/classification.ipynb" target="_blank" rel="noreferrer"><img src={classification} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Haaris-Shaik/NumberClassification/blob/main/Chapter_3_Classification/classification.ipynb" target="_blank" rel="noreferrer"><h2>Number Classification</h2></a>
                <p>Designed and implemented classification based machine learning model for handwritten digit classification using Python, scikit-learn, numpy, pandas, matplotlib.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Haaris-Shaik/task_manager/tree/main" target="_blank" rel="noreferrer"><img src={todo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Haaris-Shaik/task_manager/tree/main" target="_blank" rel="noreferrer"><h2>Task Manager</h2></a>
                <p>Designed and developed a dynamic Todo application using React, showcasing proficiency in modern front-end development and state management. The app features a clean, intuitive user interface and implements full CRUD (Create, Read, Update, Delete) operations for efficient task management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Haaris-Shaik/T20-Data-Analysis" target="_blank" rel="noreferrer"><img src={t20} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Haaris-Shaik/T20-Data-Analysis" target="_blank" rel="noreferrer"><h2>T20 Data Analysis</h2></a>
                <p>Designed and implemented a comprehensive T20 cricket data analytics project, leveraging web scraping, Python, and Power BI to extract actionable insights from the ICC T20 World Cup 2022 data.</p>
            </div>
            <div className="project">
                <a href="https://haaris-shaik.github.io/Simon-Game/" target="_blank" rel="noreferrer"><img src={simon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://haaris-shaik.github.io/Simon-Game/" target="_blank" rel="noreferrer"><h2>Simon</h2></a>
                <p>Designed and Programmed Simon game using Javascript, HTML and CSS</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
