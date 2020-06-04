import React from "react";
import Main from "./sketch";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux";
import WeatherAPI from "../handleWeatherAPI.js";

const AppWrapper = () => {
  const cityIn = useSelector((state) => state.cityIn); //city name
  //const cityLoaded = useSelector((state) => state.cityLoaded); //boolean
  if (cityIn !== "") {
    //console.log("city entered");
    let weatherAPI = new WeatherAPI(cityIn);
  }
  return (
    <React.Fragment>
      <Main cityLoaded={cityIn !== ""} />
      <SearchBar />
    </React.Fragment>
  );
};

export default AppWrapper;
