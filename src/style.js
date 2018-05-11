import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 30% auto;
  grip-gap: 1em;
  width: 100%;
  height: 100%;
  background-color: #111;
  color: #fff;
`;

export const OneColumn = styled.section`
  align-self: center;
`;

export const TwoColumns = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1em;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;    
  }
`;

export const WorkColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

export const Heading = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2.2em;
  color: #fff;
  margin: 0 0 50px;
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
  @media (max-width: 480px) {
    font-size: 1.4em;
  }
`;

export const SubHeading = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  color: #fff;
  margin: 0 0 50px;
`;
export const NegativeSpan = styled.span`
  color: rgb(7, 71, 166);
`;
