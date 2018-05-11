import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  grid-row: 1;
  background-color: #0f0f0f;
  padding: 0 10%;
  margin: 6vh 0 2vh 0;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  opacity: 1;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 0 30px 0 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-decoration: none;
`;
const SpanStyle = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  padding: 0 0.25em;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  display: inline-block;
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(7, 71, 166);
    transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  &:after {
    top: calc(50% - 1.5px);
    height: 3px;
  }
  &:hover:before {
    transform: translate3d(100%, 0, 0) translate3d(1px, 0, 0);
  }
  &:hover:after {
    transform: translate3d(0, 0, 0);
  }
`;

const Sidebar = () => {
  return <SidebarWrapper>
      <StyledLink to="/" exact strict activeClassName="link-active">
        <SpanStyle>Home</SpanStyle>
      </StyledLink>
      <StyledLink to="/about" exact strict activeClassName="link-active">
        <SpanStyle>About</SpanStyle>
      </StyledLink>
    <StyledLink to="/work" exact strict activeClassName="link-active">
        <SpanStyle>Work</SpanStyle>
      </StyledLink>
    </SidebarWrapper>;
};

export default Sidebar;
