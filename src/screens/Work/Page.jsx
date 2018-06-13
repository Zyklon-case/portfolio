import React from "react";
import ListAnchor from "components/UI/ListAnchor";
import styled from "styled-components";
import { TwoColumns, SubHeading } from "styles/";

const WorkColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 2vh 0;
    min-width: 90%;
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
    justify-content: center;
    flex-direction: column;
  }
`;
const List = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const WorkPage = () => {
  return (
    <WorkWrapper>
      <WorkColumn>
        <SubHeading>i&#39;ve built modern Web Applications for:</SubHeading>
        <List>
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
        </List>
      </WorkColumn>
      <WorkColumn bottom>
        <SubHeading>
          i&#39;ve built websites with WordPress including:
        </SubHeading>
        <List>
          <ListAnchor url="http://melar-meble.eu/">Melar Meble</ListAnchor>
          <ListAnchor url="https://wiki.dataspace.pl/">
            Data Space Wiki
          </ListAnchor>
          <ListAnchor url="http://www.cubeofficepark.pl/">
            Cube Office Park
          </ListAnchor>
          <ListAnchor url="https://jutrobedziefutro.pl/">
            Jutro Będzie Futro
          </ListAnchor>
          <ListAnchor url="http://kj.edu.pl/">
            Kollegium Jagiellońskie
          </ListAnchor>
        </List>
      </WorkColumn>
    </WorkWrapper>
  );
};

export default WorkPage;
