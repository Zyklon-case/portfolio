import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "screens/Home/Page";
import AboutPage from "screens/About/Page";
import WorkPage from "screens/Work/Page";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
// import { AnimationWrapper, ContentWrapper } from "../../styles/layout.style";

const ContentWrapper = styled.div`
  grid-row: 2;
  padding: 0 10vw;
  @media (max-width: 768px) {
    padding: 0 2.5vw;
  }
  margin: 2vh 0;
  grid-area: content;
  display: flex;
  align-items: flex-start;
  transition: all 300ms ease-out;
  align-items: center;
`;
const AnimationWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = props => {
  const locationKey = props.keylocation.pathname;
  console.log(locationKey);

  return (
    <ContentWrapper path={locationKey}>
      <TransitionGroup className="transition-wrapper">
        <CSSTransition
          key={locationKey}
          classNames="fadeTranslate"
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <AnimationWrapper>
            <Switch location={props.keylocation}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/work" component={WorkPage} />
              <Route render={() => <div>404</div>} />
            </Switch>
          </AnimationWrapper>
        </CSSTransition>
      </TransitionGroup>
    </ContentWrapper>
  );
};

export default Content;
