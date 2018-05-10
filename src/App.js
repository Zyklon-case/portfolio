import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
// import styled from "styled-components";
import { Wrapper } from "./style";
import './App.css';



class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    );
  }
}

export default App;

// HOME - jestem twoj stary, linkedin github i tak dalej
// About - opis o mnie
// Work - podlinkuje kilka stronek które robiłem
