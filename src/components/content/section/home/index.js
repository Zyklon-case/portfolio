import React from "react";
import Anchor from "../containers/Anchor";
import { OneColumn } from "styles/layout.style";
import { Heading, NegativeSpan } from "styles/master.style";

export const HomeWrapper = OneColumn.extend`
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
    position: fixed;
    justify-content: center;
  }
`;

const HomeSection = () => {
  return (
    <HomeWrapper>
      <Heading>
        I’m Łukasz Buczkowski,<br />
        a passionate <NegativeSpan>front-end</NegativeSpan> developer<br />
        based in <NegativeSpan>Toruń</NegativeSpan>
      </Heading>
      <div className="social">
        <Anchor url="https://pl.linkedin.com/in/lbuczkowski">LinkedIn</Anchor>
        <Anchor url="https://github.com/Zyklon-case">Github</Anchor>
        <Anchor url="mailto:lbuczkowski@protonmail.com">Email</Anchor>
      </div>
    </HomeWrapper>
  );
};

export default HomeSection;

// @media(max - width: 768px) {
//   left: 0;
//   width: 100vw;
//   overflow - y: scroll;
//   position: fixed;
//   justify - content: center;
// }
