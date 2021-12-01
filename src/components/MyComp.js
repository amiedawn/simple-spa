import React, { Component } from 'react';

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Today is Wednesday",
      label: "Change day",
    };
  }

  buttonChange = () => {
    this.setState({
      message: "Tomorrow is Thursday",
      label: "The day has changed",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.buttonChange}>{this.state.label}</button>
      </div>
    );
  }
}

export default MyComp;