import React from "react";
import CityData from "../city.list.min.json";
//import { useDispatch } from "react-redux";

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
      </div>
    </div>
  );
};

export default SearchBar;
