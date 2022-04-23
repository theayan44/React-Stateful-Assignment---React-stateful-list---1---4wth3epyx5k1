import React, { useState } from "react";

import "../styles/App.css";

const data = {
  "2018": ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  "2019": ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  "2020": [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came"
  ],
  "2021": ["Covid Returns"],
  "2022": ["Adventures of Saiman", "Adventures of Shaktiman"]
};
const App = () => {
  const [yearMsg, setYearMsg] = useState("No year selected");
  const [movies, setMovies] = useState([]);
  const handleYear = (val) => {
    if (val === null || val === "") {
      setYearMsg("No year selected");
      setMovies([]);
    } else {
      setYearMsg(`Selected year-${val}`);
      setMovies(data[val]);
    }
  };
  return (
    <div id="main">
      <select
        onChange={(event) => {
          handleYear(event.target.value);
        }}
      >
        <option value={null}></option>
        <option value={"2018"}>2018</option>
        <option value={"2019"}>2019</option>
        <option value={"2020"}>2020</option>
        <option value={"2021"}>2021</option>
        <option value={"2022"}>2022</option>
      </select>
      <div id="selected-year">{yearMsg}</div>
      <ul>
        {movies.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
