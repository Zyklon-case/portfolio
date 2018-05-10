import React from "react";
import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 1.1em;
    margin: 0 40px 0 0;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;
`;

const UnderlineSpan = styled.span`
  z-index: 2;
  position: relative;
  padding: 0.25em;
  display: inline-block;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgb(7, 71, 166);
    transform: scale3d(1, 0, 1);
    transform-origin: 50% 100%;
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  &:hover:before {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0%;
  }
`;

const Anchor = (props) => {
    return (
        <Link href={props.url} target="_blank">
            <UnderlineSpan>{props.children}</UnderlineSpan>
        </Link>
    );
};

export default Anchor;
