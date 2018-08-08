import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Topics from "./components/Topics";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Topics />
      </div>
    );
  }
}

export default App;
