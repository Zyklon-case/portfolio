import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
// import styled from "styled-components";
import { Wrapper } from "./style";
import './App.css';



const App =  (props) => {
    return <Wrapper>
        <Sidebar />
        <Content keylocation={props.location} />
      </Wrapper>;
  }

export default App;

// class App extends Component {
//   render() {
//     return <Wrapper>
//       <Sidebar />
//       <Content keylocation={props.location.pathname} />
//     </Wrapper>;
//   }
// }

// export default App;

// HOME - jestem twoj stary, linkedin github i tak dalej
// About - opis o mnie
// Work - podlinkuje kilka stronek które robiłem
