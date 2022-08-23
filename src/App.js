import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import "./styles.css";
import Popup from "./Popup";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="app">
        <h1>Simple Popup Excercise</h1>
        <button onClick={this.togglePopup.bind(this)}>Show Popup</button>
        <button
          onClick={() => {
            alert("Success?");
          }}
        >
          Try me when Popup is open
        </button>
        <p></p>
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
export default App;
