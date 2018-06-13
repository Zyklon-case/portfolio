import React from "react";
import styled from "styled-components";
import { OneColumn } from "styles/";

const NotFoundWrapper = OneColumn.extend`
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

const NotFoundPage = () => {
    return (
        <NotFoundWrapper>
            <Heading>
                404 page not found
            </Heading>
        </NotFoundWrapper>
    );
};

export default NotFoundPage;
