import React from "react";
import styled from "styled-components";

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 10px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 1.7rem;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <a href="/"> OMDB App</a>
    </Navbar>
  );
};

export default Header;
