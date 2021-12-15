import React from 'react';
import Cat from "./Cat";
import Dog from "./Dog";


const animals = {
  cat: Cat,
  dog: Dog,
};
function AnimalComp(props) {
  const SelectAnimal = animals[props.name];
  return <SelectAnimal />;
};

export default AnimalComp;