import React, { useState, useEffect } from "react";
import "./OurAnimals.css";

const OurAnimals = ({ cats, dogs, addedPets, onEditAnimal, onDeleteAnimal}) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [animals, setAnimals] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const mergedAnimals = [...cats, ...dogs, ...addedPets];
    setAnimals(mergedAnimals);
  }, [cats, dogs, addedPets]);

  const filteredAnimals = animals.filter((animal) => {
    if (filter === "All") return true;
    if (filter === "Dogs") return dogs.some((d) => d.id === animal.id);
    if (filter === "Cats") return cats.some((c) => c.id === animal.id);
    return false;
  });

  const searchedAnimals = filteredAnimals.filter((animal) => {
    const searchTerms = [
      animal.name.toLowerCase(),
      (animal.breed || "").toLowerCase(),
      (animal.origin || "").toLowerCase(),
    ];
    return searchTerms.some((term) =>
      term.includes(searchQuery.toLowerCase())
    );
  });

  const sortedAnimals = searchedAnimals.sort((a, b) => {
    if (sort === "All") return 0;
    if (sort === "Favorites") return b.favorite - a.favorite;
    if (sort === "Breed") return (a.breed || "").localeCompare(b.breed || "");
    return 0;
  });

  const handleEdit = (id) => {
    const animal = animals.find((animal) => animal.id === id);
    if (animal) {
      onEditAnimal(animal);
    } else {
      console.error("Animal not found with id:", id);
    }
  };

  const handleDelete = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
    onDeleteAnimal(id);
  };

  const catCount = sortedAnimals.filter((animal) =>
    cats.some((cat) => cat.id === animal.id)
  ).length;
  const dogCount = sortedAnimals.filter((animal) =>
    dogs.some((dog) => dog.id === animal.id)
  ).length;

  return (
    <div className="our-animals">
      <div className="filter-sort-container">
        <div className="filter-sort-content">
          <h3>Categories</h3>
          <div className="filter">
            <h4>Filter By:</h4>
            <div>
              <label>
                <input
                  type="radio"
                  value="All"
                  checked={filter === "All"}
                  onChange={handleFilterChange}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  value="Dogs"
                  checked={filter === "Dogs"}
                  onChange={handleFilterChange}
                />
                Dogs
              </label>
              <label>
                <input
                  type="radio"
                  value="Cats"
                  checked={filter === "Cats"}
                  onChange={handleFilterChange}
                />
                Cats
              </label>
            </div>
          </div>

          <div className="sort">
            <h4>Sort By:</h4>
            <select value={sort} onChange={handleSortChange}>
              <option value="All">All</option>
              <option value="Breed">Breed</option>
              <option value="Favorites">Favorites</option>
            </select>
          </div>

          <div className="search">
            <h4>Search:</h4>
            <input
              type="text"
              placeholder="Search animals..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className="animal-counts">
        <p>Number of Cats: {catCount}</p>
        <p>Number of Dogs: {dogCount}</p>
      </div>

      <div className="animal-list">
        {sortedAnimals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.image} alt={animal.name} />
            <h5>{animal.name}</h5>
            <p>Breed: {animal.breed}</p>
            <p>Origin: {animal.origin}</p>
            <button onClick={() => handleEdit(animal.id)}>Edit</button>
            <button onClick={() => handleDelete(animal.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAnimals;
