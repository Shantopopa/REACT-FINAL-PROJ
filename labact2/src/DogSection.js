import React, { useState } from "react";
import DogCard from "./DogCard";

const DogSection = () => {
  const items = [
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/12/Adopt-Tiki.jpg",
      text: "TIKI",
      desc: "Description",
      breed: "Dog",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/12/Adopt-Pumi.jpg",
      text: "PUMI",
      breed: "Dog",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/10/Adopt-Lot-.jpg",
      text: "LOT",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/10/Adopt-Percy.jpg",
      text: "PERCY",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/DSC_0618-scaled-e1693643745322.jpg",
      text: "THERESE",
      breed: "Dog",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/1691207856784-scaled-e1692925591960.jpg",
      text: "MITA",
      breed: "Dog",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/DSC_0590-scaled-e1692924690740.jpg",
      text: "MAGDALENA",
      breed: "Dog",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/PAWS-9944-e1693643863185.jpg",
      text: "IG",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/PAWS-9841-e1692255960472.jpg",
      text: "TIKTOK",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/PAWS-0973-e1691740424473.jpg",
      text: "TENDER",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/IMG_20230515_115026-scaled-e1689409505524.jpg",
      text: "GRUMPY",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/JLP_0102-scaled-e1689409072403.jpeg",
      text: "DEPUTY",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/DSC_0057-scaled-e1689406543973.jpg",
      text: "SHADOW",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/PAWS-0973-e1691740424473.jpg",
      text: "HARUKA",
      breed: "Cat",
      desc: "Description",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/06/DSC_0043-scaled-e1686895862885.jpg",
      text: "VIOLET",
      breed: "Cat",
      desc: "Description",
    },
  ];
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className="col-12 mb-5">
        <div className="mb-3 col-4 mx-auto text-center">
          <label className="form-label h4">Search</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Animal"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
      </div>
      <div className="dog-grid">
        {dataSearch.map((item, key) => (
          <DogCard
            key={key}
            img={item.img}
            text={item.text}
            desc={item.desc}
            breed={item.breed}
          />
        ))}
      </div>
    </>
  );
};

export default DogSection;
