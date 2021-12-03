import React, { useState } from 'react';

function Username(props) {
  const [name, setName] = useState();

  return (
    <div>
      Username: <input type="text" name="username" id="username" />
      <input type="submit" className="btn" value="Submit" />
      <p>Welcome {name}!</p>
    </div>
  );
}

export default Username;