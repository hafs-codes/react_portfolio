import React from 'react'

export default function Header() {
  return (
    <nav className="navbar">
    <div className="logo">
      <a href="assets/images/my-logo.png">
        <img src="assets/images/my-logo.png" className="logo-img" alt="My Logo"/>
      </a>
    </div>
    <ul className="nav-links">
      <div className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#Languages">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="https://drive.google.com/file/d/1x7g6SLfgcZbLQ4woeQbMSsHe8z7u--tk/view?usp=sharing" target="_blank">Resume</a></li>
        <li><a href="#Contacts">Contact</a></li>
      </div>
    </ul>
  </nav>
  )
}