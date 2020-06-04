import React, { Component } from "react";
import SearchResults from "./searchResults";
import DataBase from "../database";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  state = {
    results: [],
    idResults: [],
    cityNameIn: "",
    citySelected: "",
  };
  componentDidMount() {
    document.addEventListener("input", this.handleChange);
    document
      .getElementById("submit-btn")
      .addEventListener("click", this.handleSearch);
  }
  componentWillUnmount() {
    document.removeEventListener("input", this.handleChange);
    document.removeEventListener("click", this.handleSearch);
  }
  //---------------handle search results-----------------------
  handleChange(event) {
    this.setState({ cityNameIn: event.target.value });
    if (this.state.cityNameIn.length > 3) {
      document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
      document.getElementById("submit-btn").setAttribute("disabled", "true");
    }
  }

  handleSearch(event) {
    let data = new DataBase();
    this.setState({ results: data.getResults(this.state.cityNameIn) });
    this.setState({ idResults: data.getResultsAsIds() });
  }

  handleSelectedCity = (event) => {
    console.log(event.target.id);
    this.setState({ citySelected: event.target.id });
    this.setState({ results: [] });
  };

  render() {
    return (
      <div
        className="d-flex flex-wrap justify-content-center p-2"
        id="main"
        style={{ fontFamily: "SIMPLIFICA Typeface, Arial, sans-serif" }}
      >
        {/*Input and Button group*/}
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            id="input-bar"
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              id="submit-btn"
              onClick={this.handleSearch}
              disabled
            >
              Search
            </button>
          </div>
        </div>
        {/*Passing the search results to a separate component to allow hooks */}
        <SearchResults
          results={this.state.results}
          idResults={this.state.idResults}
        />
      </div>
    );
  }
}

export default SearchBar;
