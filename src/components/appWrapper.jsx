import React, { Component } from "react";
import Main from "./sketch";
import SearchBar from "./searchbar";

class AppWrapper extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Main />
        <SearchBar />
      </React.Fragment>
    );
  }
}

export default AppWrapper;
