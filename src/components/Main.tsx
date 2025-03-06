import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Haaris-Shaik?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/haaris-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Haaris Shaik</h1>
          <p>Data Scientist | Full Stack Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/Haaris-Shaik?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/haaris-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
