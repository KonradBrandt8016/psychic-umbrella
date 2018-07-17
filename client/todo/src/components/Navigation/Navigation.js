import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default navigation;
