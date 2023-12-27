import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ length }) => {
  const currentYear = new Date().getFullYear();
  const githubURL = 'https://github.com/RoshanBhalaji'; // Replace with your GitHub URL
  const linkedinURL = 'https://www.linkedin.com/in/roshan-bhalaji-309238259/'; // Replace with your LinkedIn URL

  return (
    <footer>
      <p>
        {length} List {length === 1 ? 'Item' : 'Items'}
      </p>
      <b>
        <p>
          &copy; {currentYear} Developed By Roshan{' '} <br></br>
          <span className="icon-container">
            <a href={githubURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginRight: '10px', color: 'black' }}>
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
          </span>
        </p>
      </b>
    </footer>
  );
};

export default Footer;
