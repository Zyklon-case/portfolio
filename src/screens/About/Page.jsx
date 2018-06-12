import React from "react";
import styled from "styled-components";
import { TwoColumns, SubHeading, NegativeSpan } from "styles/";
import picture from "profile-pic.jpg";

const AboutWrapper = TwoColumns.extend`
  position: fixed;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 80vh;
  transition: left 0.5s linear;
  @media (max-width: 768px) {
    overflow-y: scroll;
    width: 95vw;
  }
`;

const Column = styled.div`
  display: flex;
  padding: 0 1vw;
  flex-direction: column;
  justify-content: center;
`;

const AboutPage = () => {
  return (
    <AboutWrapper>
      <Column class="image-container">
        <img src={picture} alt="my ugly face" className="img-responsive" />
      </Column>
      <Column>
        <SubHeading>
          I'm 24 years old student and full time web developer at{" "}
          <NegativeSpan>Data-Invest Sp. z.o.o. s.k.a.</NegativeSpan>
          <br />
        </SubHeading>
        <SubHeading>
          I love building websites and web applications, learning new things
          everyday.
          <br />
        </SubHeading>
        <SubHeading>
          I have expierence with JavaScript, React, Redux, React Native, Vue,
          PHP, MySQL
          <br />
        </SubHeading>
        <SubHeading>
          I’m looking for a job involving <NegativeSpan>React</NegativeSpan>{" "}
          and/or modern front-end technologies
          <br />
          around Toruń, Bydgoszcz, Gdańsk or remote<br />
        </SubHeading>
        <SubHeading>
          If you're intrested don't hesitate and contact me via e-mail{" "}
          <NegativeSpan>lbuczkowski@protonmail.com</NegativeSpan>
        </SubHeading>
      </Column>
    </AboutWrapper>
  );
};

export default AboutPage;
