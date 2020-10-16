import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <Link className="social-logo" to="/">
            Justin Holmes
          </Link>
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              to={{ pathname: "https://www.linkedin.com/in/justinholmes920" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/holmesjustin" }}
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </Link>

            <Link
              className="social-icon-link email"
              to={{ pathname: "mailto:justin.holmes@duke.edu" }}
              target="_blank"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </Link>

            <Link
              className="social-icon-link youtube"
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCLoR0Gz-031fIwbqRYnAk9Q",
              }}
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
          <div className="website-rights">© Justin Holmes 2020</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
