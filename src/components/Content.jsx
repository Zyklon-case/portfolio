import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeSection from "./section/HomeSection";
import AboutSection from "./section/AboutSection";
import ContactSection from "./section/ContactSection";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1;
  padding: 0 10%;
  margin: 5.5vw 0;
`;

const Content = () => {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition timeout={300} className='fade'>
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route exact path="/about" component={AboutSection} />
            <Route exact path="/contact" component={ContactSection} />
            <Route render={() => <div>404</div>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};

export default Content;
