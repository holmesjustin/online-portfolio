import React from "react";
import { Button } from "./Button";

import "../App.css";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1 className="outline-title">Justin Holmes' Portfolio</h1>
      <p className="outline-subtitle">
        My Experiences, Acquired Skills, and Future Goals.
      </p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          See My Work
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Learn About Me
          {/* <i className="far fa-play-circle" /> */}
        </Button>
      </div>
    </div>
  );
}

export default Hero;
