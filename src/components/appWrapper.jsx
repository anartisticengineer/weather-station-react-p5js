import React from "react";
import Main from "./sketch";
import SearchBar from "./searchbar";
import { useSelector, useDispatch } from "react-redux";
import WeatherAPI from "../handleWeatherAPI.js";
import { URL, CITY_IS_LOADED } from "../actions";

const AppWrapper = () => {
  const cityIn = useSelector((state) => state.cityIn); //city name (ID)
  const cityLoaded = useSelector((state) => state.cityLoaded);
  const urlIn = useSelector((state) => state.urlIn);

  const urlDispatch = useDispatch();

  if (cityIn !== "") {
    let weatherAPI = new WeatherAPI(cityIn);
    urlDispatch({ type: URL, urlIn: weatherAPI.urlOut() });
    urlDispatch({ type: CITY_IS_LOADED });
  }
  return (
    <React.Fragment>
      <Main cityLoaded={cityLoaded} weatherUrl={urlIn} />
      <SearchBar />
    </React.Fragment>
  );
};

export default AppWrapper;
