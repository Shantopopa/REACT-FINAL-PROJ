import React from "react";
import DogCard from "./DogCard";

const DogSection = () => {
  const items = [
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/12/Adopt-Tiki.jpg",
      text: "TIKI",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/12/Adopt-Pumi.jpg",
      text: "PUMI",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/10/Adopt-Lot-.jpg",
      text: "LOT",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/10/Adopt-Percy.jpg",
      text: "PERCY",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/DSC_0618-scaled-e1693643745322.jpg",
      text: "THERESE",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/1691207856784-scaled-e1692925591960.jpg",
      text: "MITA",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/DSC_0590-scaled-e1692924690740.jpg",
      text: "MAGDALENA",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/PAWS-9944-e1693643863185.jpg",
      text: "IG",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/08/PAWS-9841-e1692255960472.jpg",
      text: "TIKTOK",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/PAWS-0973-e1691740424473.jpg",
      text: "TENDER",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/IMG_20230515_115026-scaled-e1689409505524.jpg",
      text: "GRUMPY",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/JLP_0102-scaled-e1689409072403.jpeg",
      text: "DEPUTY",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/DSC_0057-scaled-e1689406543973.jpg",
      text: "SHADOW",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/07/PAWS-0973-e1691740424473.jpg",
      text: "HARUKA",
    },
    {
      img: "https://paws.org.ph/wp-content/uploads/2023/06/DSC_0043-scaled-e1686895862885.jpg",
      text: "VIOLET",
    },
  ];
  return (
    <div className="dog-grid">
      {items.map((item, key) => (
        <DogCard key={key} img={item.img} text={item.text} />
      ))}
    </div>
  );
};

export default DogSection;
