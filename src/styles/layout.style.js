import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 10% auto;
  grip-gap: 1em;
  width: 100%;
  height: 100%;
  background-color: #111;
  color: #fff;
`;

export const NavbarWrapper = styled.div`
  grid-row: 1;
  background-color: #0f0f0f;
  padding: 0 10%;
  margin: 6vh 0 2vh 0;
  grid-area: header;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
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
export const AnimationWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 80vw;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 768px) {
    left: 0;
    width: 100vw;
    overflow-y: scroll;
    position: fixed;
    justify-content: center;
  }
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
export const HomeWrapper = OneColumn.extend``;

export const AboutWrapper = TwoColumns.extend``;

export const WorkWrapper = TwoColumns.extend``;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.bottom ? "flex-start" : "center")};
`;
