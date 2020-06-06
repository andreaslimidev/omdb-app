import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Poster = styled.img`
  max-width: 150px;
  height: auto;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Movie = (props) => {
  const url = "/" + props.id;

  return (
    <Link to={url}>
      <MovieContainer>
        <Poster src={props.image} />
      </MovieContainer>
    </Link>
  );
};

export default Movie;
