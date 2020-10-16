import React from "react";

import { Link } from "react-router-dom";

import "../App.js";
import "./About.css";

export default function About() {
  return (
    <div class="about-container">
      <div class="column-text">
        <p className="title-text">Hello, I'm Justin.</p>
        <p>
          I am a junior at Duke University, majoring in Computer Science with a
          minor in Economics and certificate in Innovation and Entrepreneurship.
        </p>
        <p>
          I love working on projects — I am a hands-on learner at heart. Whether
          it be learning business skills through starting my own aerial
          photography company or learning web dev by watching YouTube videos and
          coding my own website (welcome!), I have always had a passion for
          learning through doing. I have held positions in private equity, data
          science and engineering, search engine optimization, content creation,
          videography, and graphic design.
        </p>
        <p>
          On campus, I hold a leadership role within The Cube, Duke's Innovation
          and Entrepreneurship-themed selective living group. I have served as
          VP of Entrepreneurship, Treasurer, and President.
        </p>
        <p>
          These days, I am most excited about a venture in the health tech
          industry, a chrome extension for socially-responsible online shopping,
          and my work with{" "}
          <a
            href="https://www.earthycreations.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Earthy Creations
          </a>
          .
        </p>
        <p>
          If you would like to get in touch, please reach out via the buttons
          below my photo.
        </p>
      </div>
      <div class="column-image">
        <img
          src="images/composite.jpg"
          alt="Justin Headshot"
          width="299.75"
          height="366.875"
        />
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              to={{ pathname: "https://www.linkedin.com/in/justinholmes920" }}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-linkedin"
            >
              <i class="fab fa-linkedin" style={{ "font-size": 35 }}></i>
            </Link>
            <Link
              to={{ pathname: "mailto:justin.holmes@duke.edu" }}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-email"
            >
              <i class="fas fa-envelope" style={{ "font-size": 35 }}></i>
            </Link>
            <Link
              to={{ pathname: "https://github.com/holmesjustin" }}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-git"
            >
              <i class="fab fa-github" style={{ "font-size": 35 }}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
