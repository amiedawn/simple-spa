import React from 'react';


//functional component
const Home = (props) => {
  return (
    <div className="home">
      <h1>GOT QUESTIONS?</h1>
      <p>The easiest thing to do is post on our 
        <span> <a href="https://www.google.com">forums</a></span>
        .
      </p>
      <div>Hi, my name is {props.name}</div>
    </div>
  );
};

// class component
// class Home extends React.Component {
//   render() {
//     return (
//       <div className="home">
//         <h1>GOT QUESTIONS?</h1>
//         <p>
//           The easiest thing to do is post on our
//           <span>
//             {" "}
//             <a href="https://www.google.com">forums</a>
//           </span>
//           .
//         </p>
//       </div>
//     );
//   };
// };

export default Home;