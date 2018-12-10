import React, { Component } from "react";
import "./App.style.scss";

import Header from "../Header/Header.component";
import Menu from "../Menu/Menu.component";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container is-fluid">
          <div className="columns">
            <div className="column is-3">
              <Menu />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
