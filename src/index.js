import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Welcome from "./welcome";
import Nav from "./nav";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Hobbies from "./hobbies";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Welcome />
    <About />
    <Hobbies />
    <Contact />
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
);
