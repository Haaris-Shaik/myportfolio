import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Haaris-Shaik/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/haaris-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio of <a href="https://www.linkedin.com/in/haaris-shaik/" target="_blank" rel="noreferrer">Haaris Shaik</a> with 💜</p>
    </footer>
  );
}

export default Footer;
