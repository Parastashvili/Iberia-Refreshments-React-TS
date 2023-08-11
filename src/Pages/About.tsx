import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import sea from "../assets/sea.jpg";
import Footer from "../components/Footer/Footer";
import BG from "../assets/bg.png";
import fmg from "../assets/last.png";
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
        buttonTxt="About Us"
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
            Welcome to Pepsi Georgia, the ultimate destination for the number
            one carbonated drink that has won the hearts of 57% of the
            population across the entire territory of Georgia. With a strong
            presence in six major towns, we proudly cover the length and breadth
            of the country, bringing the refreshing taste of Pepsi to every
            corner. <br></br>
            <br></br>At Pepsi Georgia, we take pride in being the go-to choice
            for carbonated beverages, with an overwhelming majority of the
            population choosing Pepsi above all others. Our commitment to
            quality and innovation has made us the leading carbonated drink in
            the nation, resonating with people from all walks of life.<br></br>
            <br></br> Whether you're in bustling cities or serene countryside,
            Pepsi Georgia ensures that you can savor the iconic taste and
            experience the joy that only Pepsi can bring. From family gatherings
            to celebrations with friends, Pepsi has been a part of countless
            cherished moments in the lives of Georgians. <br></br>
            <br></br>Join us in celebrating the nation's favorite carbonated
            drink, Pepsi, as we continue to spread the spirit of refreshment,
            happiness, and unity throughout Georgia. Thank you for choosing
            Pepsi Georgia, where every sip is a taste of pure delight and an
            expression of our deep-rooted connection with the people of this
            beautiful country. Cheers to the moments we create together with
            Pepsi!
          </p>
        </span>
        <ImageElement
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${fmg})` }}
        ></ImageElement>
      </Grider>
      <Bold>
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
