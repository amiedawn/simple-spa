import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;

  const listItems = numbers.map((number) =>
    // listItems becomes a list of numbers or an array of 5 <li> tags
    <li key= {number.toString()}>{number * number}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList;