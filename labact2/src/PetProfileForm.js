import React, { useState } from "react";
import "./App.css";

const PetProfileForm = ({ speciesOptions, breedOptions, onAddPet }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [ageValue, setAgeValue] = useState("1");
  const [ageUnit, setAgeUnit] = useState("years");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      name: name,
      species: species,
      breed: breed,
      age: `${ageValue} ${ageUnit}`,
      image: URL.createObjectURL(image),
    };
    onAddPet(newProfile); // Call the function to add pets

    setName("");
    setSpecies("");
    setBreed("");
    setAgeValue("1");
    setAgeUnit("years");
    setImage(null);
  };

  return (
    <div className="contact">
      <div>
        <h1>Pet Profile</h1>
        <p>Fill out your pet's details below:</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <label>Pet</label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="form-select form-select-lg mb-3 bg-white"
          >
            {speciesOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label>Breed</label>
          <select
            value={breed}
            onChange={(e) => {
              console.log("Species:", species);
              console.log("Breed options:", breedOptions[species]);
              setBreed(e.target.value);
            }}
            className="form-select form-select-lg mb-3 bg-white"
          >
            {species && breedOptions[species] ? (
              breedOptions[species].map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))
            ) : (
              <option value="">Select Pet first</option>
            )}
          </select>
          <label>Age</label>
          <div className="flex mb-3 bg-white">
            <select
              value={ageValue}
              onChange={(e) => setAgeValue(e.target.value)}
              className="form-select form-select-lg mb-3 bg-white"
            >
              {[...Array(40)].map(
                (
                  _,
                  index // Max age set to 20 years
                ) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                )
              )}
            </select>
            <select
              value={ageUnit}
              onChange={(e) => setAgeUnit(e.target.value)}
              className="form-select ml-2 bg-white"
            >
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-input"
          />
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default PetProfileForm;
