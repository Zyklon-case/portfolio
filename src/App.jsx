import React, { Component } from "react";
import reset from "reset-css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Wrapper } from "./styles/layout.style";
import "./App.css";

const App = props => {
  return (
    <Wrapper>
      <Sidebar />
      <Content keylocation={props.location} />
    </Wrapper>
  );
};

export default App;

