import React from "react";
import { WorkWrapper, WorkColumn } from "../../styles/layout.style";
import { SubHeading } from "../../styles/master.style";
// import Anchor from './containers/Anchor';
import ListAnchor from "./containers/ListAnchor";

const WorkSection = () => {
  return (
    <WorkWrapper>
      <WorkColumn>
        <SubHeading>i&#39;ve built modern Web Applications for:</SubHeading>
        <ul>
          <ListAnchor url="https://dataspace.pl/">Data Space</ListAnchor>
          <ListAnchor url="http://www.datainvest.pl/pl/">
            Data Invest
          </ListAnchor>
          <ListAnchor url="http://modrasova.pl/">Modra Sova</ListAnchor>
          <ListAnchor url="http://akademia.sukcesmarketing.pl/">
            Sukces Marketing
          </ListAnchor>
          <ListAnchor url="http://www.deweloperzytorun.pl/">
            Deweloperzy Toruń
          </ListAnchor>
        </ul>
      </WorkColumn>
      <WorkColumn>
        <SubHeading>i&#39;ve built websites with WordPress including:</SubHeading>
        <ul>
          <ListAnchor url="http://kj.edu.pl/">
            Kollegium Jagiellońskie
          </ListAnchor>
          <ListAnchor url="http://www.cubeofficepark.pl/">
            Cube Office Park
          </ListAnchor>
          <ListAnchor url="http://melar-meble.eu/">Melar Meble</ListAnchor>
          <ListAnchor url="http://brzozowezacisze.fasterm.pl/">
            Osiedle Brzozowe Zacisze
          </ListAnchor>
          <ListAnchor url="http://drimer.eu/">Drimer Toruń</ListAnchor>
        </ul>
      </WorkColumn>
    </WorkWrapper>
  );
};

export default WorkSection;
