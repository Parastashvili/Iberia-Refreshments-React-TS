import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Hum from "../assets/team/hum.png";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import "aos/dist/aos.css";
import Member from "../components/Team/Member";
// import khatia from "../assets/team/1655455765191.jpg";
import mamisashvili from "../assets/team/357326351_234017122890068_5282658061640508054_n-removebg-preview.png";
import kvirchishvili from "../assets/team/358676881_1227638414445225_6873552120559804997_n-removebg-preview.png";

import "aos/dist/aos.css";
import Transparent from "../components/Styled/Transparent.styled";

export default function Story() {
  return (
    <>
      <>
        <Main />
        <Header />
      </>
      <NextBanner
        buttonTxt="OUT TEAM"
        img={Hum}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
      />
      <Transparent />
      <Team>
        <Member
          name="Nino Mamisashvili"
          position="Chief Financial Officer"
          img={mamisashvili}
          link="https://www.linkedin.com/in/nino-mamisashvili-a92254b4/"
          details="Detail-focused accounting, finance professional with strong knowledge of general management and experience in various industries over 16 years. Result-focused team worker with the ability and experience to form a strong and motivated team, inspire enthusiasm, and continual development.

          Areas of Knowledge and Expertise:
          
          Participating in the strategic planning process; Managing and running Accounting, Finance, Internal Audit, Legal, Administrative, and IT teams; 20+ successful projects of fundraising with local and international financial institutions; Business Process Development from scratch and further management, Managing massive projects of software implementation (1C Enterprise, Microsoft Dynamics Nav) in Georgian blue-chip companies; Building and developing financial team; Financial modeling and valuation; Ability to apply knowledge of IFRS and legislation (tax, labor, and entrepreneur) in financial planning and operation of the company; Taking part and leading financial side of M&A process; Extensive experience of restructuring, rehabilitation, and achievement of planned results in various Georgian companies."
        />
        <Member
          name="Lia Kvirchishvili"
          position="Head of HR Department"
          img={kvirchishvili}
          link="https://www.linkedin.com/in/lia-kvirchishvili/"
          details="When I think about things that make my life better, it's my profession. Human Resource Management is the process of recruiting, selecting, providing orientation, imparting training and development, appraising the performance of employees, deciding compensation and providing benefits, motivating employees, maintaining proper relations with employees and their trade unions. So, I am proud that I am a part of these very important processes. My professional vision is To handle yourself, use your head, to handle others, use your heart (Eleanor Roosevelt)"
        />
      </Team>
      <Contact>
        <LeftSpacer
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
        <span className="contact">
          <h1>CONTACT US</h1>
          <p>ifro@iberiarefreshments.ge</p>
        </span>
        <RightSpacer
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </Contact>
      <Footer />
    </>
  );
}

const Contact = styled.div`
  overflow: hidden;
  width: 100%;
  height: 220px;
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: skew(-20deg);
    gap: 15px;
    background-color: #202020;
    width: 60%;
    height: 100px;
    h1 {
      color: #ffffff;
      font-family: "Montserrat", sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      transform: skew(20deg);
    }
    p {
      color: #ffffff;
      font-family: "Montserrat", sans-serif;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      transform: skew(20deg);
      margin-left: 20px;
    }
  }
`;
const LeftSpacer = styled.span`
  width: 50%;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #ed1c24;
  position: absolute;
  top: 30px;
  left: 0;
`;
const RightSpacer = styled.span`
  width: 50%;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 15px solid #ffffff;
  position: absolute;
  bottom: 30px;
  right: 0;
`;
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
const Team = styled.div`
  overflow: hidden;
  width: calc(100%-4rem);
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  padding: 4rem;
  @media (min-width: 992px) {
    display: grid;
    row-gap: 50px;
    column-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    overflow-x: hidden;
  }
`;
