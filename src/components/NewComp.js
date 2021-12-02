import React, { Component } from 'react';
import bell1 from '../bell1.jpg';
import bell2 from '../bell2.jpg';

class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Subscribe to react',
      sub: "subscribe", 
      imageUrl: bell1
    }
  }

  styles = {
    width: "100px",
    height: "100px"
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
          // style = {{width: "50px", height: "70px"}}
          style= {this.styles}
          src= {this.state.imageUrl}
          onClick={this.imageChange}
          alt=""
        />
      </div>
    )
  }
}

export default NewComp;