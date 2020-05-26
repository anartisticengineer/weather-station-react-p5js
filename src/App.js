import React from "react";
//import Redux from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/sketch";
import SearchBar from "./components/searchbar";

function App() {
  return (
    <React.Fragment>
      <Main />
      <SearchBar />
    </React.Fragment>
  );
}

export default App;
