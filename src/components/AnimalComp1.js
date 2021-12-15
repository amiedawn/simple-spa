import React from "react";
import Cat1 from "./Cat1";
import Dog1 from "./Dog1";

const animals = {
  cat: Cat1,
  dog: Dog1,
};

function AnimalComp1(props) {
  const SelectAnimal = animals[props.name];
  return <SelectAnimal />;
};

export default AnimalComp1;
