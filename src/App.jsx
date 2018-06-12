import React from "react";
import Sidebar from "./components/UI/Sidebar";
import Content from "screens/Root";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 10% auto;
  grip-gap: 1em;
  width: 100%;
  height: 100%;
  background-color: #111;
  color: #fff;
`;

const App = props => {
  return (
    <Wrapper>
      <Sidebar />
      <Content keylocation={props.location} />
    </Wrapper>
  );
};

export default App;

