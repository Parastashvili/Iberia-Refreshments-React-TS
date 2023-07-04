import DirectText from "../Styled/DirectText.styled";
import Logo from "../Styled/Logo.styled";
import Transparent from "../Styled/Transparent.styled";
import styled from "styled-components";

export default function NextBanner(props: any) {
  return (
    <div>
      <Transparent />
      <Background style={{ backgroundImage: `url(${props.img})` }}>
        <LeftSpacer
          style={{ borderTop: `20px solid ${props.colorLeft}` }}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        <div className="container">
          <Logo data-aos="zoom-in" data-aos-duration="1500" />
          <DirectText data-aos="zoom-in" data-aos-duration="1500">
            {" "}
            {props.buttonTxt}{" "}
          </DirectText>
        </div>
        <RightSpacer
          style={{ borderBottom: `20px solid ${props.colorRight}` }}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
      </Background>
    </div>
  );
}

const Background = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  color: #000;
  text-transform: uppercase;
  border-bottom: 2rem solid #fbfeff;
  overflow: hidden;
  height: 90vh;
  position: relative;
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const LeftSpacer = styled.span`
  width: 35%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #ed1c24;
  position: absolute;
  top: 50%;
  left: 0;
`;
const RightSpacer = styled.span`
  width: 30%;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 20px solid #ffffff;
  position: absolute;
  top: 20%;
  right: 0;
`;
