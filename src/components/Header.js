import React from "react";

// // functional component
// const Header = () => {
//   return (
//     <div>
//       <h1 className="header">Simple SPA</h1>
//     </div>
//   );
// };

// use class if you need to maintain state
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">Simple SPA</h1>
      </div>
    );
  }
}
export default Header;
