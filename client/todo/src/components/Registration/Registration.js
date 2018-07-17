import React from "react";

const registration = () => {
  return (
    <div>
      <form action="/action-page">
        <input type="text" value="name" required />
        <input type="email" value="email" required />
        <input type="password" value="password" required />
      </form>
    </div>
  );
};

export default registration;
