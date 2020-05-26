import React, { Component } from "react";
import CityData from "../city.list.min.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.cityData = CityData;
    this.cityIds = [];
    this.cityNames = [];
  }
  state = {
    cityNameIn: "",
    results: [],
    chosenCity: "",
  };
  componentDidMount() {
    console.log("searchbar mounted");
    document.addEventListener("input", this.handleInput);
    this.cityIds = this.cityData.map((city) => city.id);
    this.cityNames = this.cityData.map((city) => city.name);
  }
  componentWillUnmount() {
    document.removeEventListener("input", this.handleInput);
  }
  //---------------handle search results-----------------------
  handleInput = (event) => {
    this.setState({ cityNameIn: event.target.value });
  };
  handleSearch = () => {
    let regEx = new RegExp(this.state.cityNameIn, "i");
    this.setState({
      results: this.cityNames.filter((city) => regEx.test(city)),
    });
  };

  handleChosenCity = (event) => {
    console.log(event.target.id);
    this.setState({ chosenCity: event.target.id });
    this.setState({ cityNameIn: "", results: [] });
  };

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center p-2" id="main">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Enter a city"
          id="input-bar"
        />
        <button
          className="btn btn-primary btn-block my-1"
          id="submit-btn"
          onClick={this.handleSearch}
          disabled={this.state.cityNameIn.length < 3}
        >
          Search
        </button>
        {/*----------Search results---------- */}
        <div id="results-display">
          {this.state.results.length === 0 ? (
            <p>Search above</p>
          ) : (
            this.state.results.map((result, index) => (
              <button
                className="btn btn-dark btn-sm m-1"
                key={index}
                onClick={this.handleChosenCity}
                id={result}
              >
                {result}
              </button>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
