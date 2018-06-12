import styled from "styled-components";

export const OneColumn = styled.section`
  align-self: center;
`;

export const TwoColumns = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-count: 1;
  }
`;

export const SubHeading = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  line-height: 1.5em;
  color: #fff;
  margin: 0 0 1rem;
  padding: 0 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const NegativeSpan = styled.span`
  color: rgb(7, 71, 166);
`;

