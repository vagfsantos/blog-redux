import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.style.scss";

import Header from "../Header/Header.component";
import MenuContainer from "../Menu/Menu.container";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container is-fluid">
          <div className="columns">
            <div className="column is-3">
              <MenuContainer />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default connect()(App);
