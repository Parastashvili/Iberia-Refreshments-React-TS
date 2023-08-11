import background from "../../assets/div.parallax-bg.jpg";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../Styled/Logo.styled";
import DirectText from "../Styled/DirectText.styled";

export default function HeroBanner() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <LeftSpacer
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />{" "}
      <Text data-aos="fade-up" data-aos-duration="1500">
        JSC "Iberia Refreshments" is the official bottler of "Pepsico" in
        Georgia and has the exclusive right to produce and distribute
        non-alcoholic soft drinks (Pepsi, 7UP, Mirinda, Aquafina) and the
        category of "snacks" (Lays, Doritos, Cheetos, etc); It also produces and
        distributes "Max Power" and Georgian lemonades (Iberia) in Georgia.{" "}
        <br />
        <br />
        JSC"Iberia Refreshments" has been operating since 2001 and is currently
        a member of the private international investment group
        <a
          href="https://www.reverygroup.com/"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontWeight: "700",
          }}
        >
          {" "}
          "Revery Group"
        </a>
        . About 500 employees are employed in the company throughout Georgia.
      </Text>
      <RightSpacer
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
      <Logo data-aos="zoom-in" data-aos-duration="1500" />
      <DirectText
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-offset="50"
      >
        {" "}
        Explore Iberia{" "}
      </DirectText>
    </Container>
  );
}
const LeftSpacer = styled.span`
  margin-left: -30%;
  width: 70%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #ed1c24;
`;
const RightSpacer = styled.span`
  margin-right: -60%;
  width: 40%;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 20px solid rgb(19, 84, 164);
`;
const Container = styled.div`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Text = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 25.8px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 34.56px;
  padding: 4% 12%;
  user-select: none;
`;
