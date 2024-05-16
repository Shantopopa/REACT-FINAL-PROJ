import { useState } from "react";
import "./App.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <h2 className="head">FAQ</h2>
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2 className="title1">{item.question}</h2>
              <span className="title1">{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "How can I adopt a pet?",
    answer:
      "Applicants go through a screening process to ensure that our rescued animals go to loving homes. The process includes an online interview via Zoom and at least two (2) separate shelter visits to meet and get to know your chosen pet.",
  },
  {
    question: "Can I return my adopted pet if I change my mind?",
    answer:
      "A pet is a lifetime commitment. However, if you truly can’t keep your adopted pet, please don’t abandon them on the streets or with strangers. Please return them to us so we can find another home for them. ",
  },
  {
    question: "Do you have puppies or kittens for adoption?",
    answer: `Puppies and kittens are only available for fostering for up to 6 months, or until they are vaccinated and neutered. Fostered puppies and kittens may be permanently adopted after this period if the fosterer passes the adoption application. `,
  },
  {
    question: "Do you pick up stray animals?",
    answer: `It’s impossible to rescue all stray animals, so we give priority to victims of cruelty and neglect or those whose life is in imminent danger. For concerns related to animal control, please contact your LGU or city pound. `,
  },
  {
    question: "Can I donate my pet to you?",
    answer: `Pets are not donations. A donation is meant to help a charity organization and leaving your pet with us is the opposite of helping.`,
  },

  {
    question: "What volunteer opportunities are available?",
    answer: `orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu..`,
  },
];

export default Accordion;
