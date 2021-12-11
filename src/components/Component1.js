// prop drilling in Components1 - Components4

import React, { useState, createContext } from 'react'
import Component2 from './Component2';

const UserContext = createContext();

function Component1() {
 const [user] = useState("David Miller");
  return (
    <UserContext.Provider value={user}>
      <h1>{user}!</h1>      
      <Component2 user={user} />
    </UserContext.Provider>
  )
};


export default Component1;
export {UserContext};
