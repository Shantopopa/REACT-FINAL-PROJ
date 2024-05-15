import React from "react";
import "./App.css";

function Animal(props) {
  return (
    <div className="animal-card">
      <img src={props.animalObj.photoName} alt={props.animalObj.name} />
      <div>
        <h3>{props.animalObj.name}</h3>
        <p>Breed: {props.animalObj.breed}</p>
      </div>
    </div>
  );
}

export default Animal;
