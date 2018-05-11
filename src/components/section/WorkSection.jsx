import React, { Component } from "react";
import { Heading, NegativeSpan, TwoColumns, WorkColumn } from "../../style";
import Anchor from "./containers/Anchor";
import ListAnchor from "./containers/ListAnchor";


const WorkSection = () => {
  return (
    <TwoColumns>
      <WorkColumn>
        <p>i've built bla bla bla Web Applications for:</p>
        <ul>
          <ListAnchor url="https://dataspace.pl/">Data Space</ListAnchor>
          <ListAnchor url="http://www.datainvest.pl/pl/">Data Invest</ListAnchor>
          <ListAnchor url="http://modrasova.pl/">Modra Sova</ListAnchor>
          <ListAnchor url="http://akademia.sukcesmarketing.pl/">Sukces Marketing</ListAnchor>
          <ListAnchor url="http://www.deweloperzytorun.pl/">Deweloperzy Toruń</ListAnchor>
        </ul>
      </WorkColumn>
      <WorkColumn>
        <p>i've built countless websites with WordPress including:</p>
        <ul>
          <ListAnchor url="http://kj.edu.pl/">Kollegium Jagiellońskie</ListAnchor>
          <ListAnchor url="http://www.cubeofficepark.pl/">Cube Office Park</ListAnchor>
          <ListAnchor url="http://melar-meble.eu/">Melar Meble</ListAnchor>
          <ListAnchor url="http://brzozowezacisze.fasterm.pl/">Osiedle Brzozowe Zacisze</ListAnchor>
          <ListAnchor url="http://drimer.eu/">Drimer Toruń</ListAnchor>
        </ul>
      </WorkColumn>
    </TwoColumns>
  );
};

export default WorkSection;
