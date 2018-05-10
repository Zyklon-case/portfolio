import React, { Component } from "react";
import { Heading, NegativeSpan } from "../../style";
import Anchor from "./containers/Anchor";
import ListAnchor from "./containers/ListAnchor";


const WorkSection = () => {
  return (
    <div>
      <p>i've built countless websites with WordPress including:</p>
      <ul>
        <ListAnchor>test</ListAnchor>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default WorkSection;
