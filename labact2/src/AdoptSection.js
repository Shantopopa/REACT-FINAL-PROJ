import React from "react";
import "./App.css";

const AdoptSection = () => {
  return (
    <div className="adopt-section">
      <div className="adopt-section-left">
        <h1>Adopt a shelter cat or dog</h1>
        <div className="p-text">
          <p>
            Our adoptable cats and dogs are all spayed/neutered (kapon) and
            vaccinated. Because they lived a difficult life before being
            rescued, we need to be sure that they get adopted by loving humans
            and won’t be subjected to further cruelty or neglect. Here’s how to
            apply:
          </p>
        </div>
        <div className="icon-list-adoption">
          <ul>
            <li>Submit the adoption application form</li>
            <li>Attend the Zoom interview</li>
            <li>Meet our shelter animals in person</li>
            <li>Visit your chosen pet to confirm your choice</li>
            <li>Wait for vet clearance and schedule pick up</li>
            <li>Pay the adoption fee of P500 (cat) / P1000 (dog)</li>
            <li>Take your pet home!</li>
          </ul>
        </div>
        <div className="adopt-section-footer">
          <button className="btn-filled">Apply Now</button>
          <button className="btn-outline">Adoption FAQ</button>
        </div>
      </div>

      <div className="adopt-section-right">
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
