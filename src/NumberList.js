import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;

  const listItems = numbers.map((number) =>
    <p key= {number.toString()}>{number*number}</p>
  );
  return (
    <div>
      {listItems}
    </div>
  );
}

export default NumberList;