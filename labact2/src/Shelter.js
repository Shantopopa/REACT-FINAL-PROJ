const Shelter = () => (
  <div className="footer-box">
    <div className="info-add">
      <h4>PAWS ANIMAL REHABILITATION CENTER (PARC)</h4>
      <p>
        Aurora Boulevard cor. Katipunan Avenue, Loyola Heights Quezon City,
        Philippines 1108
        <br /> **BY APPOINTMENT ONLY.**
        <br /> **WE DO NOT HAVE BRANCHES ANYWHERE ELSE.**
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

export default Shelter;
