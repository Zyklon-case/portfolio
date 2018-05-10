import React, { Component } from "react";
import { Heading, NegativeSpan } from "../../style";

const AboutSection = () => {
  return <div>
    <Heading>
      Currently i'm employed as Web Developer at <NegativeSpan>Data-Invest Sp. z.o.o. s.k.a.</NegativeSpan>
      <br />
    </Heading>
      <Heading>
        I’m looking for a job involving <NegativeSpan>React</NegativeSpan> and modern front-end technologies
        <br />
        around Toruń, Bydgoszcz, Gdańsk or remote<br />
      </Heading>
    </div>;
};

export default AboutSection;
