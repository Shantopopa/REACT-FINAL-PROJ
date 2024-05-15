import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AdoptSection from "./AdoptSection";
import Campaign from "./Campaign";
import OurAnimals from "./OurAnimals";
import PetProfileForm from "./PetProfileForm";
import About from "./About";
import Accordion from "./Accordion";
import { Contact } from "./Contact";
import { speciesOptions, breedOptions } from "./petData";

const App = () => {
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [addedPets, setAddedPets] = useState([]);
  const [loadingCats, setLoadingCats] = useState(false);
  const [loadingDogs, setLoadingDogs] = useState(false);
  const [error, setError] = useState(null);

  const CAT_API_KEY =
    "live_JWvwhQ22X5QEk3zmgUSY9TMbzzFb78svDiCVMdj9qZB8eS0x11GqV8X2vElTDvck";
  const DOG_API_KEY =
    "live_iY7OnXFvBJv72TumeVLprLa6Yl3fkxNtIb1KpoZFnCaRarITX4fE8cu1K4D3KQbw";

  useEffect(() => {
    const fetchSpeciesOptions = async () => {
      try {
        const catResponse = await fetch("https://api.thecatapi.com/v1/breeds", {
          headers: { "x-api-key": CAT_API_KEY },
        });
        const catData = await catResponse.json();
        const catSpeciesOptions = catData.map((cat) => ({
          label: cat.name,
          value: cat.id,
        }));

        const dogResponse = await fetch("https://api.thedogapi.com/v1/breeds", {
          headers: { "x-api-key": DOG_API_KEY },
        });
        const dogData = await dogResponse.json();
        const dogSpeciesOptions = dogData.map((dog) => ({
          label: dog.name,
          value: dog.id,
        }));

        setSpeciesOptions([
          { label: "Cats", value: "cats" },
          { label: "Dogs", value: "dogs" },
        ]);
        setBreedOptions({
          cats: catSpeciesOptions,
          dogs: dogSpeciesOptions,
        });
      } catch (error) {
        console.error("Error fetching species options:", error);
        setError("Failed to fetch species options from the API");
      }
    };

    fetchSpeciesOptions();
  }, []);

  useEffect(() => {
    const fetchCats = async () => {
      setLoadingCats(true);
      let catsData = [];
      try {
        while (catsData.length < 10) {
          const response = await fetch(
            "https://api.thecatapi.com/v1/images/search?limit=50&include_breeds=true",
            {
              headers: { "x-api-key": CAT_API_KEY },
            }
          );
          if (!response.ok) {
            throw new Error(
              `Cat API call failed with status ${response.status}`
            );
          }
          const data = await response.json();
          const filteredData = data
            .filter((cat) => cat.breeds && cat.breeds.length > 0)
            .map((cat) => ({
              id: cat.id,
              name: cat.breeds[0].name,
              breed: cat.breeds[0].name,
              origin: cat.breeds[0].origin,
              favorite: Math.random() < 0.5, // Mock favorite status for example
              image: cat.url,
            }));
          catsData = [...catsData, ...filteredData].slice(0, 10);
        }
        setCats(catsData);
      } catch (error) {
        console.error("Error fetching cats:", error);
        setError("Failed to fetch data from the Cat API");
      } finally {
        setLoadingCats(false);
      }
    };

    const fetchDogs = async () => {
      setLoadingDogs(true);
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search?limit=10&include_breeds=true",
          {
            headers: { "x-api-key": DOG_API_KEY },
          }
        );
        if (!response.ok) {
          throw new Error(`Dog API call failed with status ${response.status}`);
        }
        const data = await response.json();
        const dogsData = data.map((dog) => ({
          id: dog.id,
          name:
            dog.breeds && dog.breeds.length > 0
              ? dog.breeds[0].name
              : "Unknown",
          breed:
            dog.breeds && dog.breeds.length > 0
              ? dog.breeds[0].name
              : "Unknown",
          origin:
            dog.breeds && dog.breeds.length > 0
              ? dog.breeds[0].origin
              : "Unknown",
          favorite: Math.random() < 0.5, // Mock favorite status for example
          image: dog.url,
        }));
        setDogs(dogsData);
      } catch (error) {
        console.error("Error fetching dogs:", error);
        setError("Failed to fetch data from the Dog API");
      } finally {
        setLoadingDogs(false);
      }
    };

    fetchCats();
    fetchDogs();
  }, []);

  const deleteAnimal = (deletedAnimalId) => {
    // Filter out the deleted animal from the addedPets array
    const updatedPets = addedPets.filter(
      (animal) => animal.id !== deletedAnimalId
    );
    setAddedPets(updatedPets);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/our-animals"
          element={
            <OurAnimals
              cats={cats}
              dogs={dogs}
              addedPets={addedPets}
              onDeleteAnimal={deleteAnimal}
            />
          }
        />

        <Route
          path="/pet-profile-form"
          element={
            <PetProfileForm
              speciesOptions={speciesOptions}
              breedOptions={breedOptions}
              onAddPet={(newPet) => setAddedPets([...addedPets, newPet])}
            />
          }
        />

        <Route path="about" element={<About />} />

        <Route path="faqs" element={<Accordion />} />

        <Route path="contacts" element={<Contact />} />

        <Route
          path="/"
          element={
            <>
              <AdoptSection />
              <Campaign />
              <Shelter />
            </>
          }
        />
      </Routes>
      <Footer />
      {error && <div>Error: {error}</div>}
    </Router>
  );
};

const Header = () => (
  <header>
    <img className="logo" src="webapplogo.png" alt="logo" />
    <nav className="nav_links">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/our-animals">our animals</Link>
        </li>
        <li>
          <Link to="/about">about us</Link>
        </li>
        <li>
          <Link to="/pet-profile-form"> Add a pet for adoption </Link>
        </li>
        <li>
          <Link to="/faqs">faq</Link>
        </li>
        <li>
          <Link to="/contacts">contact us</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Shelter = () => (
  <div className="footer-box">
    <div className="info-add">
      <h4>PAWS ANIMAL REHABILITATION CENTER (PARC)</h4>
      <p>
        Aurora Boulevard cor. Katipunan Avenue, Loyola Heights Quezon City,
        Philippines 1108
        <br /> **BY APPOINTMENT ONLY.**
        <br /> **WE DO NOT HAVE BRANCHES ANYWHERE ELSE.**
        <br /> Click map to enlarge or{" "}
        <span className="google">view Google map here</span>
      </p>
      <div className="map-box">
        <img className="map" src="Map.jpg" alt="map"></img>
      </div>
    </div>
    <div className="info-box">
      <p>
        The shelter and all our programs and campaigns are funded solely by
        donations. You can donate any amount via bank deposit or Paypal
        transfer.
      </p>
      <br />
      <p>
        <b>Bank of the Philippine Islands</b> (Swift no. BOPIPHMM) Acct Name:
        The Philippine Animal Welfare Society, Inc. USD Acct No. 3944-0021-61
        PHP Acct No. 3943-0086-11
      </p>
      <br />
      <p>
        <b>Philippine National Bank </b> (Swift no. PNBM PHMM) Acct Name: The
        Philippine Animal Welfare Society, Inc. Acct No. 1888-70015305
      </p>
      <br />
      <p>
        <b>BDO Savings</b>
        Acct Name : The Philippine Animal Welfare Society, Inc. Acct No :
        0076-4800-5860
      </p>
      <br />
      <p>
        <i>
          Checks should be issued to{" "}
          <b>Philippine Animal Welfare Society, Inc.</b>
        </i>
      </p>
    </div>
    <div className="donate-info-box">
      <div className="misc-pads">
        <img src="Artemis-Sydney.png" className="art" alt="ans" />
      </div>
      <div className="misc-pads">
        <button className="dnbtn">Donate Online</button>
      </div>
      <div className="misc-pads">
        <img src="PAWS-Philippines-QR-1.png" alt="qr" className="qr-code" />
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="credits">
              <a href="#">Privacy Policy</a> | <a href="#">Terms & Condition</a>
            </div>
            <div className="copyright text-center">
              <p>
                &copy; 2024 The Philippine Animal Welfare Society. All Rights
                Reserved.
                <br /> Website donated by syllogistic.ai Limited · intelligent
                marketing that www.works!®
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default App;
