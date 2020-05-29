import React from "react";
import Main from "./sketch";
import SearchBar from "./searchbar";
import { useSelector, useDispatch } from "react-redux";

const AppWrapper = () => {
  const cityIn = useSelector((state) => state.cityIn);
  const cityLoaded = useSelector((state) => state.cityLoaded);

  return (
    <React.Fragment>
      <Main cityLoaded={cityLoaded} />
      <SearchBar />
    </React.Fragment>
  );
};

export default AppWrapper;
