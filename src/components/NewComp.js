import React, { Component } from 'react';
import bell1 from '../logo512.png';
import bell2 from '../logo192.png';

class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Subscribe to react',
      sub: "subscribe", 
      imageUrl: bell1
    }
  }

  buttonChange = () => {
    this.setState ({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed"
    })
  };

  imageChange = () => {
    this.setState({
      imageUrl: bell2,
      message: "the bell has changed, thank you for subscribing"
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <img  
          style = {{width: "50px", height: "70px"}}
          src= {this.state.imageUrl}
          onClick={this.imageChange}
          alt="" />
      </div>
    )
  }
}

export default NewComp;