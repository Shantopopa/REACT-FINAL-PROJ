// src/AdoptSection.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Accordion from "./Accordion";

const AdoptSection = () => {
  return (

    <div className="adopt-section bg-white rounded">
      <Routes>  
      <Route
      path="faqs"
      element={<Accordion/>}
    />
    </Routes>  
      <div className="adopt-section-left bg-white">
        <h1 className="bg-white">Adopt a shelter cat or dog</h1>
        <div className="p-text bg-white">
          <p className="bg-white">
            Our adoptable cats and dogs are all spayed/neutered (kapon) and
            vaccinated. Because they lived a difficult life before being
            rescued, we need to be sure that they get adopted by loving humans
            and won’t be subjected to further cruelty or neglect. Here’s how to
            apply:
          </p>
        </div>
        <div className="icon-list-adoption bg-white">
          <ul className="bg-white">
            <li className="bg-white">Submit the adoption application form</li>
            <li className="bg-white">Attend the Zoom interview</li>
            <li className="bg-white">Meet our shelter animals in person</li>
            <li className="bg-white">Visit your chosen pet to confirm your choice</li>
            <li className="bg-white">Wait for vet clearance and schedule pick up</li>
            <li className="bg-white">Pay the adoption fee of P500 (cat) / P1000 (dog)</li>
            <li className="bg-white">Take your pet home!</li>
          </ul>
        </div>
        <div className="adopt-section-footer bg-white">
        <button className="btn-outline bg-white"><Link to="/faqs" className="bg-white">Adoption FAQ</Link></button>
        </div>
      </div>

      <div className="adopt-section-right bg-white">
        <img
          src="https://paws.org.ph/wp-content/uploads/2023/07/JLP_0102-scaled-e1689409072403.jpeg"
          className="adopt-section-image"
          alt="pic"
        />
        <img
          src="https://paws.org.ph/wp-content/uploads/2023/08/DSC_0618-scaled-e1693643745322.jpg"
          className="adopt-section-image"
          alt="pic"
        />
        <img
          src="https://paws.org.ph/wp-content/uploads/2023/08/1691207856784-scaled-e1692925591960.jpg"
          className="adopt-section-image"
          alt="pic"
        />
      </div>
    </div>
  );
};

export default AdoptSection;
