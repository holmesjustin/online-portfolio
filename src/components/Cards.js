import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Featured Work and Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* TOP FEATURED ROW */}
          {/* <div className='project-labels'> Top Projects</div> */}

          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Take a look at what I am working on right now!"
              alt="Current Projects"
              label="Current Projects"
              path="/portfolio"
            />
            <CardItem
              src="images/img-7.jpg"
              alt="Favorite Projects"
              text="Check out my personal favorite projects and accomplishments!"
              label="Favorites"
              path="/portfolio"
            />
          </ul>

          {/* Second row */}
          <div className="project-labels"> All Experiences</div>
          <ul className="cards__items">
            <CardItem
              src="images/drone-seals.jpg"
              alt="Holmes Aerial Photography"
              text="Holmes Aerial Photography, LLC"
              label="Drones"
              path="/portfolio"
            />
            <CardItem
              src="images/11-paper-place.jpg"
              alt="3D Animation Work"
              text="3D Animations with Middlebury College"
              label="Animation"
              path="/portfolio"
            />
            <CardItem
              src="images/duke-gang.jpg"
              alt="Duke Football Graphic Design"
              text="Graphic Design for the Duke University Football Program"
              label="Graphic Design"
              path="/portfolio"
            />
          </ul>

          {/* Third row */}
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              alt="Internship Experience"
              text="Previous Internship Experiences"
              label="Work Experience"
              path="/portfolio"
            />
            <CardItem
              src="images/project-edge.jpg"
              alt="Project Edge at Duke"
              text="Project Edge at Duke University"
              label="Pre-Orientation Leadership"
              path="/portfolio"
            />
            <CardItem
              src="images/bullfighting.jpg"
              alt="Living in Mexico"
              text="Living in Mexico City - ¡Viva México!"
              label="Living Abroad"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
