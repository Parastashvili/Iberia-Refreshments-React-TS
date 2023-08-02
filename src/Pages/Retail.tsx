import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Field from "../assets/field.jpg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import fmg from "../assets/fmg.jpg";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";
import pepsi from "../assets/pepsi.png";
import { Card } from "antd";
import pepsi1 from "../assets/products/pepsi.png";
import pepsi2 from "../assets/products/pepsi2.png";
import max from "../assets/products/max.png";
export default function Story() {
  const data = [
    {
      key: 2,
      saxeli: "Pepsi Can",
      img: pepsi1,
    },
    {
      key: 3,
      saxeli: "Pepsi 2L",
      img: pepsi2,
    },
    {
      key: 4,
      saxeli: "Max Power",
      img: max,
    },
  ];
  const { Meta } = Card;
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
          We connect underdeveloped food and beverage markets in emerging
          economies with global brands and promote local flavors to the world.
          Our goal is to enhance consumers' choices and cultural appreciation
          while enriching lives globally.
        </p>
        <div
          style={{
            padding: "50px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {data.map((data) => (
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              hoverable
              style={{ width: 240, backgroundColor: "rgb(256,256,256,0.1)" }}
              cover={<img alt="example" src={data.img} />}
            >
              <Meta title={data.saxeli}/>
            </Card>
          ))}
        </div>
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
            "Iberia Refreshments" is the official bottler of PepsiCo in Georgia,
            proudly representing the iconic brand Pepsi along with other popular
            beverages like 7UP, Mirinda, and Aquafina. As the exclusive
            distributor, we bring the refreshing taste of Pepsi to households
            and consumers across the country.
            <br /> <br /> Our commitment to excellence and quality resonates
            with Pepsi's longstanding legacy. Embracing the PepsiCo values, we
            strive to deliver unparalleled customer satisfaction through our
            range of Pepsi products. From the classic Pepsi cola to the exciting
            Pepsi flavors, we aim to quench the thirst of our valued consumers
            and bring moments of joy to their lives. <br /> <br />
            As a part of the global Pepsi family, we operate with integrity,
            innovation, and a vision for a brighter future. Our team at "Iberia
            Refreshments" is dedicated to upholding the legacy of Pepsi,
            ensuring that each bottle carries the essence of refreshment and
            happiness. Join us in savoring the taste of Pepsi, a symbol of joy
            and togetherness that has been delighting generations around the
            world."
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
  overflow: hidden;
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
