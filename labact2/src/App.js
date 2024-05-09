import "./App.css";
import Data from "./animalData.js";
import Animal from "./Animal.js";
import Campaign from "./Campaign.js";
import AdoptSection from "./AdoptSection.js";
import DogSection from "./DogSection.js";

function App() {
  return (
    <div>
      <Header />
      {/* <Adoption /> */}
      <AdoptSection />
      <DogSection />
      <Campaign />
      <Shelter />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img class="logo" src="PAWS-New-Logo.png" alt="logo" />
      <nav class="nav_links">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">our animals</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">join us</a>
          </li>
          <li>
            <a href="#">support us</a>
          </li>
          <li>
            <a href="#">faq</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Shelter() {
  return (
    <div className="footer-box">
      <div className="info-add">
        <h4>PAWS ANIMAL REHABILITATION CENTER (PARC)</h4>
        <p>
          Aurora Boulevard cor. Katipunan Avenue, Loyola Heights Quezon City,
          Philippines 1108
          <br />
          **BY APPOINTMENT ONLY.***
          <br />
          **WE DO NOT HAVE BRANCHES ANYWHERE ELSE.***
          <br />
          Click map to enlarge or{" "}
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
        <br></br>
        <p>
          <b>Bank of the Philippine Islands</b> (Swift no. BOPIPHMM) Acct Name:
          The Philippine Animal Welfare Society, Inc. USD Acct No. 3944-0021-61
          PHP Acct No. 3943-0086-11
        </p>
        <br></br>
        <p>
          <b>Philippine National Bank </b> (Swift no. PNBM PHMM) Acct Name: The
          Philippine Animal Welfare Society, Inc. Acct No. 1888-70015305
        </p>
        <br></br>
        <p>
          <b>BDO Savings</b>
          Acct Name : The Philippine Animal Welfare Society, Inc. Acct No :
          0076-4800-5860
        </p>
        <br></br>
        <p>
          <i>
            Checks should be issued to{" "}
            <b>Philippine Animal Welfare Society, Inc.</b>
          </i>
        </p>
      </div>

      <div classname="donate-info-box">
        <div className="misc-pads">
          <img src="Artemis-Sydney.png" className="art" alt="ans" />
        </div>
        <div className="misc-pads">
          {" "}
          <button className="dnbtn">Donate Online</button>
        </div>
        <div className="misc-pads">
          <img src="PAWS-Philippines-QR-1.png" alt="qr" className="qr-code" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div class="footer-area-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div className="credits">
                <a href="#">Privacy Policy</a> |{" "}
                <a href="#">Terms & Condition</a>
              </div>
              <div class="copyright text-center">
                <p>
                  &copy; 2024 The Philippine Animal Welfare Society. All Rights
                  Reserved.|All Rights Reserved.
                  <br />
                  Website donated by syllogistic.ai Limited · intelligent
                  marketing that www.works!®
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
