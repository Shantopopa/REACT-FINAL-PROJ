// src/Campaign.js
import React from "react";
import "./App.css";

const Campaign = () => {
  return (
    <div className="campaign-section">
      <div className="campaign-section-left">
        <img src="Arthur-and-Family.jpg" alt="" />
      </div>
      <div className="campaign-section-right">
        <h2 className="campaign-heading">
          Former shelter dog{" "}
          <span style={{ backgroundColor: "#FFFFFF" }}>ARTHUR</span>
        </h2>
        <p>
          Tis now living the life in Canada with his furparents Terrie and Mike,
          and his little sister Pia. All it took is love and human companionship
          to transform this shy, cautious guy to a loyal and loving king of the
          household.
          <br />
          <br />
          You, too, can open your home to a shelter animal and change their
          life.
        </p>
        <div className="green-text" tyle={{ paddingBottom: "10px" }}>
          <button className="dnbtn" style={{ paddingTop: "10px" }}>
            Visit website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
