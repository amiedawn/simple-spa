import React, { useState } from 'react';

function Username(props) {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");


  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setNewName((e) => name);
        }}
      >
        Username:{" "}
        <input
          type="text"
          name="username"
          id="username"
          onChange={(event) => setName((e) => event.target.value)}
        />
        <input type="submit" className="btn" value="Submit" />
        <p>Welcome {newName}!</p>
      </form>
    </div>
  );
}

export default Username;