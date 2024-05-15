// DogSection.js
import React from "react";
import DogCard from "./DogCard";

const DogSection = ({ dogs }) => {
  return (
    <div className="dog-grid">
      {dogs.map((dog, key) => (
        <DogCard
          key={key}
          img={dog.image}
          text={dog.breed || "Unknown"}
        />
      ))}
    </div>
  );
};

export default DogSection;