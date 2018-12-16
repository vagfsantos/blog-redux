import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Menu = ({ categories }) => (
  <aside className="menu">
    <p className="menu-label">Categories</p>
    <ul className="menu-list">
      {categories.map(category => (
        <li key={category.name}>
          <NavLink to={`/${category.path}`} className="is-uppercase is-size-7">
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </aside>
);

Menu.defaultProps = {
  categories: []
};

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Menu;
