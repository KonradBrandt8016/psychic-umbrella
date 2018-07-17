import React from "react";
import "./Registration.css";

const registration = () => {
  return (
    <div className="section">
      <form action="http://localhost:5000/user" method="POST">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-12">
              <div className="tile is-parent">
                <article className="tile is-child notification has-background-light">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button type="submit">Register</button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default registration;
