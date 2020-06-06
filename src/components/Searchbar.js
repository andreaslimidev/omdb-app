import React, { useState } from "react";
import styled from "styled-components";

const Search = styled.input`
  border: 0;
  border-bottom: 2px solid;
  border-color: #c4c4c4;
  padding: 20px 5px 0;
  background-color: #282c34;
  color: white;
  margin-top: 1rem;
  outline: 0;
  max-width: 600px;
  min-width: 30vw;
  text-align: center;
  font-size: 2rem;
`;

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const search = props.search;

  return (
    <form className="searchform">
      <Search
        className="bar"
        value={query}
        onChange={(e) => {
          search(e.target.value);
          setQuery(e.target.value); // very slow when switching order between functions ^
          console.log("Should search!");
        }}
        type="text"
        placeholder="Ex. Avatar"
      />
    </form>
  );
};

export default SearchBar;
