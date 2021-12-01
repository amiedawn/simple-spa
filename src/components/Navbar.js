import React from "react";

// functional component
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul>
//         <li>Home</li>
//         <li>Stuff</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Stuff</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
