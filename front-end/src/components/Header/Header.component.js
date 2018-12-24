import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Readable
        </Link>
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/post/new" className="button is-success">
              <span className="icon">
                <i className="fas fa-plus-square" />
              </span>
              <span>Add new post</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
