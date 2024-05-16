import React, { useState } from "react";
import Model from "./Model";
import "./App.css";

const DogCard = ({ img, text, desc, breed }) => {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, text, desc, breed) => {
    let tempData = [img, text, desc, breed];
    setTempdata((item) => [1, ...tempData]);

    return setModel(true);
  };

  return (
    <section>
      <div className="dog-card-box-section">
        <div className="dog-card">
          <img className="dog-image" src={img} alt="pic" />
          <p className="dog-text">{text}</p>
          <button
            className="btn btn-primary"
            onClick={() => getData(img, text, desc, breed)}
          >
            See More
          </button>
        </div>
      </div>
      {model === true ? (
        <Model
          img={tempdata[1]}
          text={tempdata[2]}
          desc={tempdata[3]}
          breed={tempdata[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default DogCard;
