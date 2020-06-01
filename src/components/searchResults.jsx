import React, { Component } from "react";
import { useDispatch } from "react-redux";

const SearchResults = (props) => {
  const dispatch = useDispatch();

  return (
    <div id="results-display">
      {props.results.length === 0 ? (
        <p>No results found</p>
      ) : (
        props.results.map((result, index) => (
          <button
            className="btn btn-dark btn-sm m-1"
            key={index}
            id={props.idResults[index]}
            onClick={() =>
              dispatch({
                type: "SEARCH",
                cityIn: props.idResults[index],
              })
            }
          >
            {result}
          </button>
        ))
      )}
    </div>
  );
};

export default SearchResults;
