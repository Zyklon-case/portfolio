import React from "react";
import styled from "styled-components";
import { TwoColumns } from "styles/layout.style";
import { SubHeading } from "styles/master.style";
import ListAnchor from "../containers/ListAnchor";

const WorkColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width:768px) { 
    margin: 2vh 0;
  }
`;

const WorkWrapper = TwoColumns.extend`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  width: 80vw;
  @media (max-width: 768px) {
    width: 95vw;
    overflow-y: scroll;
    position: fixed;
    justify-content: center;
    flex-direction: column;
  }
`;

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
      <WorkColumn bottom>
        <SubHeading>i&#39;ve built websites with WordPress including:</SubHeading>
        <ul>
          <ListAnchor url="http://melar-meble.eu/">Melar Meble</ListAnchor>
          <ListAnchor url="https://wiki.dataspace.pl/">Data Space Wiki</ListAnchor>
          <ListAnchor url="http://www.cubeofficepark.pl/">
            Cube Office Park
          </ListAnchor>
          <ListAnchor url="http://kj.edu.pl/">
            Kollegium Jagiellońskie
          </ListAnchor>
          <ListAnchor url="http://brzozowezacisze.fasterm.pl/">
            Osiedle Brzozowe Zacisze
          </ListAnchor>
        </ul>
      </WorkColumn>
    </WorkWrapper>
  );
};

export default WorkSection;

