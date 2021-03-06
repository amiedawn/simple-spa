import { useState } from "react";

function HookExample2() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "mustang",
    year: "1984",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return{...previousState, color: "Green"}
    } );
  }

  return (
    <div>
      <h1>my favorite car is {car.model}</h1>
      <p>It is a {car.color} {car.brand} from {car.year}.</p>

      <button onClick= {updateColor}>make green</button>

    </div>
  );
}

export default HookExample2;
