import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export default navigation;
