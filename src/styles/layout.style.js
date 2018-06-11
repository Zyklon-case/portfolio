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


