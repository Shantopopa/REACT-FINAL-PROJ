import React from "react";
import Animal from "./Animal";

const CatSection = ({ cats }) => {
  return (
    <div className="cat-grid">
      {cats.map((cat, key) => (
        <Animal
          key={key}
          animalObj={{
            name: cat.breeds.length > 0 ? cat.breeds[0].name : "Unknown",
            photoName: cat.url,
            breed: cat.breeds.length > 0 ? cat.breeds[0].name : "Unknown",
          }}
        />
      ))}
    </div>
  );
};

export default CatSection;
