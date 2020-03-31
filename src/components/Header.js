import React from "react";

import "./Header.css";

function Header() {
  return (
    <nav className="menu" style={{ zIndex: 1 }}>
      <div className="menu__logo">
        <a href="/">Pokedex</a>
      </div>
    </nav>
  );
}

export default Header;
