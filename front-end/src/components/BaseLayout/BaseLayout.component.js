import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/Header.component";
import MenuContainer from "../Menu/Menu.container";

const BaseLayout = props => (
  <div>
    <Header />
    <main className="container is-fluid">
      <div className="columns">
        <div className="column is-3">
          <MenuContainer />
        </div>
        <div className="column is-9">{props.children}</div>
      </div>
    </main>
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default BaseLayout;
