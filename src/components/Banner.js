import React from "react";
import "../styles/banner.css";
import leaf from "../assets/leaf.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="title-container">
        <img src={leaf} alt="img" className="logo" />
        <h1 className="title">La maison jungle</h1>
      </div>
      <div>
        <div className="burger">
          <div className="first-cross"></div>
          <div className="second-cross"></div>
          <div className="third-cross"></div>
        </div>
      </div>
    </div>
  );
}
