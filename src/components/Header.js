import React from 'react';
import { Link } from 'react-scroll';
import myLogo from '../images/my-logo.png';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a>
            <img src={myLogo} className="logo-img" alt="My Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <div className="menu">
            <li>
              <Link to="about" smooth={true} duration={100}>
                About
              </Link>
            </li>
            <li>
              <Link to="Languages" smooth={true} duration={100}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true} duration={100}>
                Projects
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1x7g6SLfgcZbLQ4woeQbMSsHe8z7u--tk/view?usp=sharing" target="_blank">
                Resume
              </a>
            </li>
            <li>
              <Link to="Contacts" smooth={true} duration={100}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
