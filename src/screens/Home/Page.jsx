import React from "react";
import Anchor from "components/UI/Anchor";
import styled from "styled-components";
import { OneColumn, NegativeSpan } from "styles/";

const HomeWrapper = OneColumn.extend`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Heading = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2.2em;
  line-height: 1.1em;
  color: #fff;
  margin: 0 0 50px;
  @media (max-width: 768px) {
    font-size: 1.8em;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <Heading>
        I’m Łukasz Buczkowski,<br />
        a passionate <NegativeSpan>front-end</NegativeSpan> developer<br />
        based in <NegativeSpan>Toruń</NegativeSpan>
      </Heading>
      <Social>
        <Anchor url="https://pl.linkedin.com/in/lbuczkowski">LinkedIn</Anchor>
        <Anchor url="https://github.com/Zyklon-case">Github</Anchor>
        <Anchor url="mailto:lbuczkowski@protonmail.com">Email</Anchor>
      </Social>
    </HomeWrapper>
  );
};

export default HomePage;
