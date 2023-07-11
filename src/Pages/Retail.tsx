import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Field from "../assets/field.svg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import fmg from "../assets/fmg.svg";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";
import pepsi from "../assets/pepsi.png";

export default function Story() {
  return (
    <>
      <>
        <Main />
        <Header />
      </>
      <NextBanner
        buttonTxt="Food & Beverages and Retail"
        img={Field}
        colorLeft="#1354a4"
        colorRight="#FFFFFF"
      ></NextBanner>
      <StoryTeller>
        <LeftSpacer
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        <p
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          We believe there is a large underdeveloped food and beverage market in
          emerging markets. Global brands are under-penetrated locally and local
          flavors are under-appreciated globally. We help bring these two
          disconnections together to improve the lives and choices of consumers
          in emerging markets.
        </p>
        <RightSpacer
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        <Bold
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h4 className="textCont">OUR BUSINESSES</h4>
        </Bold>
      </StoryTeller>
      <Grider>
        <span
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Midder>
            <LeftSpacer
              style={{
                borderBlockColor: "#1354a4",
                marginLeft: "-35%",
                width: "100%",
              }}
            />
          </Midder>
          <p className="midderText">
            <img className="logo" src={logo} alt="logo" />
            <br></br>
            Revery Food and Beverages is the food, beverages and logistics
            investment arm of Revery Group. We focus on building long-term
            sustainable businesses and empowering management teams to build
            bigger, better, stronger companies that can grow organically every
            year. <br></br>
            <br></br> RF&B operates as a dual-layered evergreen investment
            company that includes industry experts and operators to help each
            business grow and build capabilities, as well as an investment team
            that is seeking to consistently add brands, businesses and new
            geographies to our platform via acquisitions and/or joint ventures.
            <br></br>
            <br></br> We work closely with multinationals to improve their
            franchises in emerging markets and align our goals to win share
            together. We partner with or acquire local champions to help them
            grow their businesses beyond their geographies and improve their
            operations.<br></br>
            <br></br> Our aim is to be the preferred partner for F&B businesses
            and multinationals in various geographies. Currently, RF&B owns and
            operates multiple PepsiCo Franchises in Eurasia, as well as
            distributing Nestlé, Carlsberg and other brands in the Caucasus.
            <br /> <br />
            <img className="pepsi" src={pepsi} alt="" />
          </p>
        </span>
        <ImageElement
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${fmg})` }}
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
  width: 60%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #ffffff;
  position: absolute;
  top: 20px;
  left: 0;
`;
const RightSpacer = styled.span`
  width: 55%;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 15px solid #ffffff;
  position: absolute;
  bottom: 100px;
  right: 0;
`;
const StoryTeller = styled.div`
  background-color: transparent;
  width: 100%;
  position: relative;
  p {
    margin: auto;
    max-width: 1100px;
    padding: 40px 100px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
`;
const Bold = styled.div`
  width: 100%;
  background: #1354a4;
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
