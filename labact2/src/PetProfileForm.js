import React, { useState } from 'react';
import "./App.css";

const PetProfileForm = ({ speciesOptions, breedOptions, onAddPet }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [ageValue, setAgeValue] = useState('1');
  const [ageUnit, setAgeUnit] = useState('years');
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
      image: URL.createObjectURL(image) 
    };
    onAddPet(newProfile); // Call the function to add pets

    setName('');
    setSpecies('');
    setBreed('');
    setAgeValue('1');
    setAgeUnit('years');
    setImage(null);
  };

  return (
    <div className="container mx-auto py-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input mt-1 block w-full" />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pet:
            <select value={species} onChange={(e) => setSpecies(e.target.value)} className="form-select mt-1 block w-full">
              {speciesOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Breed:
            <select 
              value={breed} 
              onChange={(e) => {
                console.log("Species:", species);
                console.log("Breed options:", breedOptions[species]);
                setBreed(e.target.value);
              }} 
              className="form-select mt-1 block w-full"
            >
              {species && breedOptions[species] ? (
                breedOptions[species].map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))
              ) : (
                <option value="">Select Pet first</option>
              )}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age:
            <div className="flex">
              <select value={ageValue} onChange={(e) => setAgeValue(e.target.value)} className="form-select mt-1 w-1/2">
                {[...Array(40)].map((_, index) => ( // Max age set to 20 years
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              <select value={ageUnit} onChange={(e) => setAgeUnit(e.target.value)} className="form-select mt-1 ml-2">
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image:
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-input mt-1 block w-full" />
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PetProfileForm;
