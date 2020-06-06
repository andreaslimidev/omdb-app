import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  margin: 1rem auto;
  max-width: 80vw;
  max-height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
