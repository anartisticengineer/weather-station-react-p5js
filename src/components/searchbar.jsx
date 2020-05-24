import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    cityNameIn: "",
  };
  componentDidMount() {
    console.log("searchbar mounted");
    document.addEventListener("input", this.handleInput);
  }
  handleInput = (event) => {
    this.setState({ cityNameIn: event.target.value });
  };

  render() {
    return (
      <div id="main">
        <input type="text" placeholder="Enter a city" id="input-bar" />
        <button id="submit-btn">Search</button>
      </div>
    );
  }
}

export default SearchBar;
