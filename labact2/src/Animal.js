import "./App.css";

function Animal(props) {
  return (
    <div className="pizza">
      <img src={props.animalObj.photoName} alt={props.name} />
      <div>
        <h3> {props.animalObj.name} </h3>
      </div>
    </div>
  );
}

export default Animal;
