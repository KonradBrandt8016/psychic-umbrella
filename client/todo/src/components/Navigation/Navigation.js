import React from "react";
import "./Navigation.css";

const navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <a href="/registration">Register</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </ul>
  );
};

export default navigation;
