import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeSection from "./section/HomeSection";
import AboutSection from "./section/AboutSection";
import WorkSection from "./section/WorkSection";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 2;
  padding: 0 10%;
  margin: 2vh 0;
`;

const Content = (props) => {

  const locationKey = props.keylocation.pathname
  
  return <Wrapper>
      <TransitionGroup>
        <CSSTransition key={locationKey} classNames="fadeTranslate" timeout={1000} mountOnEnter={true} unmountOnExit={true}>
          <section className="fix-container">
            <Switch location={props.keylocation}>
              <Route exact path="/" component={HomeSection} />
              <Route exact path="/about" component={AboutSection} />
              <Route exact path="/work" component={WorkSection} />
              <Route render={() => <div>404</div>} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>;
};

export default Content;
