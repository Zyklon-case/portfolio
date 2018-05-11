import React, { Component } from "react";
import styled from "styled-components";
import Anchor from "./containers/Anchor";
import { Heading, NegativeSpan, OneColumn } from "../../style";



const HomeSection = () => {
  return (
    <OneColumn>
      <Heading>
        I’m Łukasz Buczkowski,<br />
        a passionate <NegativeSpan>front-end</NegativeSpan> developer<br />
              based in <NegativeSpan>Toruń</NegativeSpan>
      </Heading>
      <div className="about-block__social">
              <Anchor url="https://pl.linkedin.com/in/lbuczkowski">
                LinkedIn
              </Anchor>
              <Anchor url="https://github.com/Zyklon-case">
                  Github
              </Anchor>
              <Anchor url="mailto:lbuczkowski@protonmail.com">
                  Email
              </Anchor>
      </div>
    </OneColumn>
  );
};

export default HomeSection;
