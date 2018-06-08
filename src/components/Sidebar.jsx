import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavbarWrapper } from "../styles/layout.style";
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
