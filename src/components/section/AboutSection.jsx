import React from "react";
import { AboutWrapper } from "../../styles/layout.style";
import { SubHeading, NegativeSpan } from "../../styles/master.style";
import picture from "../../profile-pic.jpg";

const AboutSection = () => {
  return <AboutWrapper>
      <aside>
        <img src={picture} alt="goddamnit eslint" className="img-responsive" />
      </aside>
      <div>
        <SubHeading>
          I'm 24 years old student and full time web developer at <NegativeSpan
          >
            Data-Invest Sp. z.o.o. s.k.a.
          </NegativeSpan>
          <br />
        </SubHeading>
        <SubHeading>
          I love building websites and web applications, learning new things everyday.
          <br />
        </SubHeading>
        <SubHeading>
          I have expierence with JavaScript, React, Redux, React Native, Vue, PHP, MySQL
          <br />
        </SubHeading>
        <SubHeading>
          I’m looking for a job involving <NegativeSpan>React</NegativeSpan> and/or modern front-end technologies
          <br />
          around Toruń, Bydgoszcz, Gdańsk or remote<br />
        </SubHeading>
        <SubHeading>
          If you're intrested don't hesitate and contact me via e-mail <NegativeSpan
          >
            lbuczkowski@protonmail.com
          </NegativeSpan>
        </SubHeading>
      </div>
    </AboutWrapper>;
};

export default AboutSection;
