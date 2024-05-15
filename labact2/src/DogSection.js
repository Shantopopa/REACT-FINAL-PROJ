import React from "react";
import DogCard from "./DogCard";

const DogSection = ({ dogs }) => {
  return (
    <div className="dog-grid">
      {dogs.map((dog, key) => (
        <DogCard
          key={key}
          img={dog.url}
          text={dog.breeds.length > 0 ? dog.breeds[0].name : "Unknown"}
        />
      ))}
    </div>
  );
};

export default DogSection;
