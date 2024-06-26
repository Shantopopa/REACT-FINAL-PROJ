import React, { useState, useEffect } from "react";

const AnimalCard = ({ animal, onEdit, onDelete, onToggleFavorite }) => (
  <div className="border border-gray-300 rounded p-4 bg-white">
    <img src={animal.image} alt={animal.name} className="w-full mb-2 rounded" />
    <h5 className="text-lg font-semibold mb-1 bg-white">{animal.name}</h5>
    <p className="bg-white">Breed: {animal.breed}</p>
    <div className="flex justify-end mt-4 bg-white">
      <button
        onClick={() => onToggleFavorite(animal.id)}
        className={`px-4 py-2 rounded ${
          animal.favorite
            ? "bg-yellow-500 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        {animal.favorite ? "Unfavorite" : "Favorite"}
      </button>
      <button
        onClick={() => onDelete(animal.id)}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
      >
        Delete
      </button>
    </div>
  </div>
);

const OurAnimals = ({ cats, dogs, addedPets, onDeleteAnimal }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [animals, setAnimals] = useState([]);
  const [favorites, setFavorites] = useState([]);

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
    const mergedAnimals = [...cats, ...dogs, ...addedPets].map((animal) => ({
      ...animal,
      favorite: false,
    }));
    setAnimals(mergedAnimals);
  }, [cats, dogs, addedPets]);

  const toggleFavorite = (id) => {
    const updatedAnimals = animals.map((animal) =>
      animal.id === id ? { ...animal, favorite: !animal.favorite } : animal
    );
    setAnimals(updatedAnimals);

    const updatedFavorites = updatedAnimals.filter((animal) => animal.favorite);
    setFavorites(updatedFavorites);
  };

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
    return searchTerms.some((term) => term.includes(searchQuery.toLowerCase()));
  });

  const sortedAnimals = searchedAnimals.sort((a, b) => {
    if (sort === "All") return 0;
    if (sort === "Favorites") return b.favorite - a.favorite;
    if (sort === "Breed") return (a.breed || "").localeCompare(b.breed || "");
    if (sort === "Name") return a.name.localeCompare(b.name); // Add this line for sorting by name
    return 0;
  });

  const animalsToDisplay =
    sort === "Favorites"
      ? sortedAnimals.filter((animal) => animal.favorite)
      : sortedAnimals;

  const handleDelete = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
    onDeleteAnimal(id);
  };

  const catCount = animalsToDisplay.filter((animal) =>
    cats.some((cat) => cat.id === animal.id)
  ).length;
  const dogCount = animalsToDisplay.filter((animal) =>
    dogs.some((dog) => dog.id === animal.id)
  ).length;

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 bg-white">
        <div className="mb-4 md:mb-0 bg-white">
          <h3 className="text-xl font-semibold mb-2 bg-white">Categories</h3>
          <div className="flex flex-col md:flex-row bg-white">
            <div className="flex items-center mb-2 md:mb-0 md:mr-4 bg-white">
              <h4 className="mr-2 bg-white">Filter By:</h4>
              <label className="cursor-pointer flex items-center bg-white">
                <input
                  type="radio"
                  value="All"
                  checked={filter === "All"}
                  onChange={handleFilterChange}
                  className="mr-1 bg-white"
                />
                All
              </label>
              <label className="cursor-pointer flex items-center ml-4 bg-white">
                <input
                  type="radio"
                  value="Dogs"
                  checked={filter === "Dogs"}
                  onChange={handleFilterChange}
                  className="mr-1 bg-white"
                />
                Dogs
              </label>
              <label className="cursor-pointer flex items-center ml-4 bg-white">
                <input
                  type="radio"
                  value="Cats"
                  checked={filter === "Cats"}
                  onChange={handleFilterChange}
                  className="mr-1"
                />
                Cats
              </label>
            </div>
            <div className="flex items-center bg-white">
              <h4 className="mr-2 bg-white">Sort By:</h4>
              <select
                value={sort}
                onChange={handleSortChange}
                className="border border-gray-300 px-2 py-1 rounded bg-white"
              >
                <option value="All">All</option>
                <option value="Breed">Breed</option>
                <option value="Favorites">Favorites</option>
                <option value="Name">Name</option>{" "}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <h4 className="mb-2 bg-white">Search:</h4>
          <input
            type="text"
            placeholder="Search animals..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 px-2 py-1 rounded bg-white"
          />
        </div>
      </div>

      <div className="mb-4 bg-white">
        <p className="bg-white">Number of Cats: {catCount}</p>
        <p className="bg-white">Number of Dogs: {dogCount}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
        {animalsToDisplay.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onDelete={handleDelete}
            onToggleFavorite={toggleFavorite}
          />
        ))}
        {sort === "Favorites" && animalsToDisplay.length === 0 && (
          <p className="col-span-full text-center bg-white">
            No favorite animals.
          </p>
        )}
      </div>
    </div>
  );
};

export default OurAnimals;
