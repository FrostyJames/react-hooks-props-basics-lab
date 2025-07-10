import React from "react";

function NavBar(user) {
  return (
    <nav>
      <span>Welcome, {user.name}!</span>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

export default NavBar;
