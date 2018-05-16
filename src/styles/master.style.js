import styled from 'styled-components';

export const Heading = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2.2em;
  line-height:1.1em;
  color: #fff;
  margin: 0 0 50px;
  @media (max-width: 768px) {
    font-size: 1.8em;
    text-align: center;
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

export const SpanStyle = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  padding: 0 0.25em;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  display: inline-block;
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(7, 71, 166);
    transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  &:after {
    top: calc(50% - 1.5px);
    height: 3px;
  }
  &:hover:before {
    transform: translate3d(100%, 0, 0) translate3d(1px, 0, 0);
  }
  &:hover:after {
    transform: translate3d(0, 0, 0);
  }
`;

export const NegativeSpan = styled.span`
  color: rgb(7, 71, 166);
`;
