import React, { Component } from "react";
import ReactDOM from "react-dom";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <p>Name: Elvin</p>
        <p>Age: 19</p>
        <p>Country: Azerbaijan</p>
      </div>
    );
  }
}

class Experience extends Component {
  render() {
    return <p>Experience:1 years</p>;
  }
}

class Contacts extends Component {
  render() {
    return (
      <div>
        <p>+994502661139</p>
        <p>elvinabbassoy@gmail.com</p>
      </div>
    );
  }
}

class UserCV extends Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
    );
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<UserCV />, rootElement);
