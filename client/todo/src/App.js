import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Welcome} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
