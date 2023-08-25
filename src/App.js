import React, { Component } from "react";

class App extends Component {
  state = {
    myName: "Alex",
    age: 23,
    occupation: "Software Developer",
    country: "Singapore",
    contact: {
      email: "admin@email.com",
    },
  };

  handleChangeInfo = () => {
    this.setState({
      myName: "New Name",
      occupation: "Teacher",
      country: "Malaysia",
      contact: {
        email: "new_email@email.com",
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Hi!</h2>
        <p>My name is {this.state.myName}</p>
        <p>I work as a {this.state.occupation}</p>
        <p>I live at {this.state.country}</p>
        <p>You can reach me at {this.state.contact.email}</p>
        <p>Click on the button below to change my info!</p>
        <button onClick={this.handleChangeInfo}>Click here!</button>
      </React.Fragment>
    );
  }
}

export default App;
