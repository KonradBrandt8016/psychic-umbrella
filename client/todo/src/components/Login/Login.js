import React from "react";

const login = () => {
  return (
    <div className="section">
      <form action="/action-page">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-12">
              <div className="tile is-parent">
                <article class="tile is-child notification has-background-light">
                  <input
                    class="form-input"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <input
                    class="form-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button type="submit">Login</button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
