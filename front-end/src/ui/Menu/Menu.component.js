import React from "react";
import PropTypes from "prop-types";

const Menu = ({ categories }) => (
  <aside className="menu">
    <p className="menu-label">Categories</p>
    <ul className="menu-list">
      {categories.map(category => (
        <li key={category.name}>
          <a href={category.path}>{category.name}</a>
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
