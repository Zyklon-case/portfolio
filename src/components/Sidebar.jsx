import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1;
  background-color: #0f0f0f;
  padding: 0 10%;
  margin: 5.5vw 0;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.5em;
  text-decoration: none;
  display: flex;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 70px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <StyledLink to="">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  );
};

export default Sidebar;
