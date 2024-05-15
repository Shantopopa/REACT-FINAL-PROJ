// CatSection.js
import React from "react";
import Animal from "./Animal";

const CatSection = ({ cats }) => {
  return (
    <div className="cat-grid">
      {cats.map((cat, key) => (
        <Animal
          key={key}
          animalObj={{
            name: cat.name || "Unknown",
            photoName: cat.image,
            breed: cat.breed || "Unknown",
          }}
        />
      ))}
    </div>
  );
};

export default CatSection;