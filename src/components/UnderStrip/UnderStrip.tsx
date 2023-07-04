import Transparent from "../Styled/Transparent.styled";
import { styled } from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function UnderStrip() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Transparent />
      <UnderHero>
        <LeftSpacerMini
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        <h1>
          Strategic partnerships • Local capabilities • International expansions
          • Operational expertise • Global network
        </h1>
        <RightSpacerMini
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
      </UnderHero>
    </div>
  );
}
const UnderHero = styled.div`
  position: relative;
  width: 100%;
  background-color: #202020;
  overflow: hidden;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 28.8px;
    padding: 60px;
    user-select: none;
  }
`;
const RightSpacerMini = styled.div`
  width: 55%;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 10px solid #ed1c24;
  position: absolute;
  right: 0;
  bottom: 15px;
`;
const LeftSpacerMini = styled.div`
  width: 52%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ed1c24;
  position: absolute;
  left: 0;
  top: 15px;
`;
