import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SpanStyle } from "../styles/master.style";

const StyledLink = styled(NavLink)`
  color: #fff;
  opacity: 1;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 0 1rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-decoration: none;
`;

const NavbarWrapper = styled.div`
  grid-row: 1;
  background-color: #0f0f0f;
  padding: 0 10%;
  margin: 6vh 0 2vh 0;
  grid-area: header;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Sidebar = () => {
  return <NavbarWrapper>
      <StyledLink to="/" exact strict activeClassName="link-active">
        <SpanStyle>Home</SpanStyle>
      </StyledLink>
      <StyledLink to="/about" exact strict activeClassName="link-active">
        <SpanStyle>About</SpanStyle>
      </StyledLink>
    <StyledLink to="/work" exact strict activeClassName="link-active">
        <SpanStyle>Work</SpanStyle>
      </StyledLink>
    </NavbarWrapper>;
};

export default Sidebar;
