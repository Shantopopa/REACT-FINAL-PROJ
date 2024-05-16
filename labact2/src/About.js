import React from "react";
import "./App.css";
function About() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title display-1 ">Meet the Team</h2>
            <p className="section-subtitle text-justify text-md-left">
              Welcome to the dedicated team behind{" "}
              <b>PAWS Cat & Dog Shelter!</b> We are a passionate group of animal
              lovers and healthcare professionals committed to providing the
              highest standard of care for our furry, feathered, and scaly
              friends. With a wealth of experience and expertise in veterinary
              medicine, animal welfare, and compassionate care, our team works
              tirelessly to ensure the well-being and happiness of every patient
              entrusted to us. From routine check-ups to advanced treatments, we
              approach each case with empathy, skill, and a deep-rooted
              commitment to improving the lives of animals. Get to know the
              faces and stories behind our team as we strive to make a positive
              impact in the world of animal healthcare.
            </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src="/sarah.png" className="team-img" alt="Team Picture" />
              <h3 className="name">Sarah Johnson</h3>
              <div className="team-info">
                <p className="name1">Shelter Manager</p>
                {/* <p className="name1 text-justify">
                  "Meet Sarah Johnson, our Shelter Manager extraordinaire. With
                  boundless compassion and expert organizational skills, Sarah
                  ensures every animal at PAWS Cat & Dog Shelter! receives
                  top-notch care. From adoptions to daily operations, Sarah's
                  leadership ensures our shelter remains a haven for animals in
                  need."
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src="/michael.png" className="team-img" alt="Team Picture" />
              <h3 className="name">Michael Turner</h3>
              <div className="team-info">
                <p className="name1">Volunteer Coordinator</p>
                {/* <p className="name1 text-justify">
                  "Meet Michael Turner, our diligent Volunteer Coordinator at
                  PAWS Cat & Dog Shelter!. With deep compassion and masterful
                  organization, Michael ensures every volunteer contributes
                  effectively. His passion for animal welfare drives him to
                  match volunteers with fulfilling roles, enriching the lives of
                  our shelter residents. Under Michael's guidance, volunteers
                  play a pivotal role in supporting our mission and enhancing
                  animal well-being."
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src="/david.png" className="team-img" alt="Team Picture" />
              <h3 className="name">David Patterson</h3>
              <div className="team-info">
                <p className="name1">Development Manager</p>
                {/* <p className="name1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
