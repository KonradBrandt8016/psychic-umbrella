import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Welcome />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
