import React from "react";
import "./App.css";
const DogCard = ({ img, text }) => {
  return (
    <div className="dog-card-box-section">
      <div className="dog-card">
        <img className="dog-image" src={img} alt="pic" />
        <p className="dog-text">{text}</p>
      </div>
    </div>
  );
};

export default DogCard;
