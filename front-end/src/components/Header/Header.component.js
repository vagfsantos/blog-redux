import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Readable
        </Link>
      </div>
    </nav>
  </header>
);
