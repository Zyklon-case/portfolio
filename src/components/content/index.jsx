import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeSection from "./section/home/";
import AboutSection from "./section/about/";
import WorkSection from "./section/work/";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimationWrapper, ContentWrapper } from "../../styles/layout.style";
// import { Heading, NegativeSpan } from "../styles/master.style";

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
              <Route exact path="/" component={HomeSection} />
              <Route exact path="/about" component={AboutSection} />
              <Route exact path="/work" component={WorkSection} />
              <Route render={() => <div>404</div>} />
            </Switch>
          </AnimationWrapper>
        </CSSTransition>
      </TransitionGroup>
    </ContentWrapper>
  );
};

export default Content;
