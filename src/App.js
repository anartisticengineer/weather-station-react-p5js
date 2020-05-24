import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/sketch";
import SearchBar from "./components/searchbar";
//import Sketch from 'react-p5';

function App() {
  return (
    <React.Fragment>
      <Main />
      <SearchBar />
    </React.Fragment>
  );
}

export default App;
