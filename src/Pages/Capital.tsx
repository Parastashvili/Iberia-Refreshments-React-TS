import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import sea from "../assets/sea.svg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import fmg from "../assets/last.svg";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

export default function Story() {
  return (
    <>
      <>
        <Main />
        <Header />
      </>
      <NextBanner
        buttonTxt="Venture capital"
        img={sea}
        colorLeft="#feb01a"
        colorRight="#FFFFFF"
      ></NextBanner>
      <Grider>
        <span
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Midder>
            <LeftSpacer
              style={{
                borderBlockColor: "#feb01a",
                marginLeft: "-35%",
                width: "100%",
              }}
            />
          </Midder>
          <p className="midderText">
            <img className="logo" src={logo} alt="logo" />
            <br></br>
            Revery Capital is the venture and alternative investments arm of
            Revery focused on companies that are driving transformational change
            in industries such as Food-Tech, Wellness, Hospitality and Venture
            Capital.
          </p>
        </span>
        <ImageElement
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${fmg})` }}
        ></ImageElement>
      </Grider>
      <Bold
      >
        <h4 className="textCont">OUR PARTNERS</h4>
      </Bold>
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
  width: 60%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #ffffff;
  position: absolute;
  top: 20px;
  left: 0;
`;
const Bold = styled.div`
  width: 100%;
  background: #feb01a;
  .textCont {
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px;
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
  .pepsi {
    margin: -50px 30%;
    width: 200px;
  }
  .logo {
    width: 300px;
    margin-left: -60px;
  }
  overflow-x: hidden;
  margin-top: 50px;
  width: 100%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
const ImageElement = styled.div`
  width: 100% !important;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
