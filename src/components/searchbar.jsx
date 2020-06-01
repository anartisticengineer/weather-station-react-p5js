import CityData from "../city.list.min.json";

let results = [];
let cityNameIn = "";

const SearchBar = () => {
  const cityIds = CityData.map((city) => city.id);
  const cityNames = CityData.map((city) => city.name);

  const handleChange = (event) => {
    cityNameIn = event.target.value;
    if (cityNameIn.length > 3) {
      document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
      document.getElementById("submit-btn").setAttribute("disabled", "true");
    }
  };

  const handleSearch = () => {
    //console.log("search");
    let regEx = new RegExp(cityNameIn, "i");
    results = cityNames.filter((city) => regEx.test(city));
  };

  /*
    cityLoaded: "",
  //---------------handle search results-----------------------
  handleSearch = () => {
    let regEx = new RegExp(this.state.cityNameIn, "i");
    this.setState({
      results: this.cityNames.filter((city) => regEx.test(city)),
    });
  };

  handleChosenCity = (event) => {
    console.log(event.target.id);
    this.setState({ cityLoaded: event.target.id });
    this.setState({ cityNameIn: "", results: [] });
  };
  */
  //const FONT_FAMILY = {"font-family: SIMPLIFICA Typeface, Arial, sans-serif"};
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-2"
      id="main"
      style={{ fontFamily: "SIMPLIFICA Typeface, Arial, sans-serif" }}
    >
      <input
        type="text"
        className="form-control my-1"
        placeholder="Enter a city"
        id="input-bar"
        onChange={handleChange}
      />
      <button
        className="btn btn-primary btn-block my-1"
        id="submit-btn"
        onClick={handleSearch()}
        disabled
      >
        Search
      </button>
      {/*----------Search results---------- */}
      <div id="results-display">
        {results.length === 0 ? (
          <p>Search above</p>
        ) : (
          results.map((result, index) => (
            <button className="btn btn-dark btn-sm m-1" key={index} id={result}>
              {result}
            </button>
          ))
        )}
import React, { Component } from "react";
import dispatch from "redux";
import SearchResults from "./searchResults";

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
    </div>
};

export default SearchBar;
