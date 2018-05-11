import React, { Component } from "react";
import { Heading, SubHeading, NegativeSpan } from "../../style";
import Anchor from "./containers/Anchor";
import styled from "styled-components";

import picture from "../../profile-pic.jpg";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const AboutSection = () => {
  return <Grid>
      <aside>
        <img src={picture} alt="Łukasz's photo" />
      </aside>
      <div>
        <SubHeading>
          I'm 24 years old student and full time web developer at <NegativeSpan
          >
            Data-Invest Sp. z.o.o. s.k.a.
          </NegativeSpan>
          <br />
        </SubHeading>
        <SubHeading>
          I love building websites and web applications, learning new things everyday.
          <br />
        </SubHeading>
        <SubHeading>
          I have expierence with JavaScript, React, Redux, React Native, PHP, MySQL
          <br />
        </SubHeading>
        <SubHeading>
          I’m looking for a job involving <NegativeSpan>React</NegativeSpan> and/or modern front-end technologies
          <br />
          around Toruń, Bydgoszcz, Gdańsk or remote<br />
        </SubHeading>
        <SubHeading>
          If you're intrested don't hesitate and contact me via e-mail <NegativeSpan
          >
            lbuczkowski@protonmail.com
          </NegativeSpan>
        </SubHeading>
      </div>
    </Grid>;
};

export default AboutSection;
