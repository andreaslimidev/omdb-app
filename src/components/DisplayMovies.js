import React, { useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import SearchBar from "./Searchbar";
import axios from "axios";
require("dotenv").config();

const BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&page=1&s=`;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1000px;
  margin-top: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DisplayMovies = () => {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    axios.get(BASE_URL + query).then((res) => {
      if (res.data.Response === "True") {
        setMovies(res.data.Search.filter((movie) => movie.Poster !== "N/A"));
        console.log(movies);
      } else {
        setMovies([]);
      }
    });
  };

  return (
    <>
      <SearchBar search={search} />
      <Grid>
        {movies.map((movie) => (
          <Movie title={movie.Title} image={movie.Poster} id={movie.imdbID} />
        ))}
      </Grid>
    </>
  );
};

export default DisplayMovies;
