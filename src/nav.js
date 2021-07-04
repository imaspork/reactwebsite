import React from "react";
import "./App.css";
import Resume from "./Tyler_Strong_Resume_2021.pdf";

const Nav = () => {
  return (
    <nav>
      <ul id="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href={Resume}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
