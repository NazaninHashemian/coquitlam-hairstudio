import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        {/* <li className="nav-item">
          <a href="#services">Services</a>
        </li> */}
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        {/* <li className="nav-item">
          <a href="#reservation">Reservation</a>
        </li> */}
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
      {/* <img
        src="/animation.jpg"
        alt="Animation"
        style={{ width: "6%", maxHeight: "300px", objectFit: "cover" }}
      /> */}
    </nav>
  );
};

export default NavBar;
