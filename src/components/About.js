import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          architecto, fuga ipsum cum nemo quas iusto, debitis minima ratione,
          sapiente vel libero aliquam quos quisquam odit necessitatibus delectus
          voluptatibus exercitationem.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Officia architecto, fuga ipsum cum nemo quas iusto,
          debitis minima ratione, sapiente vel libero aliquam quos quisquam odit
          necessitatibus delectus voluptatibus exercitationem.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Officia architecto, fuga ipsum
          cum nemo quas iusto, debitis minima ratione, sapiente vel libero
          aliquam quos quisquam odit necessitatibus delectus voluptatibus
          exercitationem.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Officia architecto, fuga ipsum cum nemo quas iusto, debitis
          minima ratione, sapiente vel libero aliquam quos quisquam odit
          necessitatibus delectus voluptatibus exercitationem.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Officia architecto, fuga ipsum
          cum nemo quas iusto, debitis minima ratione, sapiente vel libero
          aliquam quos quisquam odit necessitatibus delectus voluptatibus
          exercitationem.
        </p>
      </div>
    </div>
  );
}

export default About;
