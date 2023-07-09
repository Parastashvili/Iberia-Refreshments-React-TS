import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Tree from "../assets/trees.svg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import story1 from "../assets/story1.svg";
import story2 from "../assets/story2.svg";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

export default function Story() {
  const navigate = useNavigate();

  const navigation = (path: any) => {
    navigate(path);
  };
  return (
    <>
      <>
        <Main />
        <Header />
      </>
      <NextBanner
        buttonTxt="OUT STORY"
        img={Tree}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
      />
      <StoryTeller
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <LeftSpacer />
        <p>
          Revery was originally part of a family office that has investment and
          operational experience in Eurasia for over 30 years in various
          sectors. Today Revery operates as an independent investment firm with
          strategic partnerships that are core competencies of our business
          model.
        </p>
        <Bold>
          <h4 className="textCont">
            WE THRIVE ON CREATING AND SUSTAINING LONG TERM PARTNERSHIPS WITH
            BRANDS, INSTITUTIONS, CORPORATIONS AND FAMILY OFFICES.
          </h4>
        </Bold>
      </StoryTeller>
      <Grider>
        <FirstElement
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>OUR APPROACH</h2>
          <p>
            We combine our global network and investment experience to bring
            together people, partnerships and capital.
          </p>
          <p>
            Through deep analysis and close collaboration we build sustainable
            business models that withstand economic cycles and create
            undiscovered value in emerging markets in cyclical-agnostic food &
            beverage businesses.
          </p>
          <p>
            We take a very long term view of our venture capital investments
            that can be expanded and deployed into all existing and future
            portfolio companies and geographies of Revery.
          </p>
          <RightSpacer />
        </FirstElement>
        <ImageElement
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${story1})` }}
        ></ImageElement>
        <span
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Midder>
            <h4 className="textContMid">OUR TEAM</h4>
          </Midder>
          <p className="midderText">
            We work in close partnership with management teams at our portfolio
            companies to transformatively improve capabilities, ensure human
            flourishment and unlock value within each business. Developing and
            retaining local talent is a core focus of our strategy.
            <br /> <br />
            <span className="learnMore" onClick={() => navigation("/Team")}>
              Learn More
            </span>
          </p>
        </span>
        <ImageElement
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${story2})` }}
        ></ImageElement>
      </Grider>
      <Footer />
    </>
  );
}
const Main = styled.div`
  background-image: url(${BG});
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
`;
const LeftSpacer = styled.span`
  width: 50%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
  position: absolute;
  top: 20px;
  left: 0;
`;
const StoryTeller = styled.div`
  background-color: transparent;
  width: 100%;
  position: relative;
  p {
    padding: 40px 100px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    font-family: "Montserrat", sans-serif;
  }
`;
const Bold = styled.div`
  width: 50%;
  background: #202020;
  margin: auto;
  transform: skew(-20deg, 0deg);
  .textCont {
    transform: skew(20deg, 0deg);
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 13.6px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.12px;
  }
`;
const Midder = styled.div`
  width: 60%;
  margin: auto;
  background: #ed1c24;
  transform: skew(-30deg, 0deg);
  .textContMid {
    margin-top: 40px;
    transform: skew(30deg, 0deg);
    padding: 20px 60px;
    text-align: center;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 17.6px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.12px;
  }
`;
const Grider = styled.div`
  overflow-x: hidden;
  margin-top: 50px;
  width: 100%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    :nth-child(1) {
      grid-row: 1;
      grid-column: 2;
    }
    :nth-child(3) {
      grid-row: 2;
      grid-column: 1;
    }
  }
  .midderText {
    width: 70%;
    margin: auto;
    padding: 50px 0px;
    color: #212529;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    .learnMore {
      cursor: pointer;
      text-decoration-line: underline;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
const FirstElement = styled.div`
  background: #202020;
  padding: 30px 100px 60px;
  position: relative;
  h2 {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38.4px;
  }
  p {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
  }
`;
const RightSpacer = styled.span`
  width: 50%;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 10px solid #ed1c24;
  position: absolute;
  bottom: 30px;
  right: 0;
`;
const ImageElement = styled.div`
  width: 100% !important;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
