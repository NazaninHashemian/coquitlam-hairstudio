import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.instagram.com/coquitlam_hair_studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
