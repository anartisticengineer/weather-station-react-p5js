import React from "react";
import Main from "./sketch";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux";

const AppWrapper = () => {
  const cityIn = useSelector((state) => state.cityIn); //city name
  //const cityLoaded = useSelector((state) => state.cityLoaded); //boolean

  return (
    <React.Fragment>
      <Main cityLoaded={cityIn !== ""} />
      <SearchBar />
    </React.Fragment>
  );
};

export default AppWrapper;
