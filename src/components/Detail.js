import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
require("dotenv").config();

const BASE_URL = `https://tranquil-hollows-67389.herokuapp.com/api/movie/single/`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: #1e1f22;
  padding: 2rem;
  color: white;
  text-align: left;
`;

const Meta = styled.div`
  margin-top: 2rem;
`;

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(BASE_URL + id).then((res) => {
      if (res.data.Response === "True") {
        setMovie(res.data);
        console.log(res.data);
      }
    });
  }, []);

  return movie ? (
    <Container>
      <div>
        <img src={movie.Poster} alt="movie poster"></img>
      </div>
      <Card>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <Meta>
          <p>
            <strong>Genres: </strong> {movie.Genre}
          </p>
          <p>
            <strong>Actors: </strong> {movie.Actors}
          </p>
          <p>
            <strong>Director(s): </strong> {movie.Director}
          </p>
          <p>
            <strong>Metascore: </strong> {movie.Metascore}
          </p>
        </Meta>
      </Card>
    </Container>
  ) : (
    <div>Loading...</div>
  );
};

export default Detail;
