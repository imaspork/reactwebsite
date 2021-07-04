import React from "react";
import "./App.css";
import gmail from "./gmail.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import github from "./github.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="row-wrapper">
        <div id="contact-row" className="column-wrapper">
          <h1 id="contact-h1">Contact me!</h1>
          <div className="width-wrapper">
            <div className="row-wrapper">
              <div className="column-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/imaspork"
                >
                  <img className="image-small" src={github} alt="github"></img>
                </a>
                <p className="contact-header">Github</p>
              </div>
              <div className="column-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tyler-strong-46b0a4129/"
                >
                  <img
                    className="image-small"
                    src={linkedin}
                    alt="linkedin"
                  ></img>
                </a>
                <p className="contact-header">LinkedIn</p>
              </div>
              <div className="column-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/imtylre"
                >
                  <img
                    className="image-small"
                    src={twitter}
                    alt="twitter"
                  ></img>
                </a>
                <p className="contact-header">Twitter</p>
              </div>
              <div className="column-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:tyler.strong1@gmail.com?subject=Portfolio Website"
                >
                  <img className="image-small" src={gmail} alt="email"></img>
                </a>
                <p className="contact-header">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
