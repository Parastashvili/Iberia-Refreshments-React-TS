import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Tree from "../assets/trees.jpg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
import story1 from "../assets/happy.jpg";
import story2 from "../assets/team/hum.png";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

export default function Story() {
  const navigate = useNavigate();

  const navigation = (path: any) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          We are Iberia Refreshments - the exclusive Pepsi-Cola bottler
          representing PepsiCo International on the Georgian market through
          holding a franchise agreement for organizing production and sales of
          soft beverages in Georgia. We are a fast-growing company and one of
          the largest beverages’ producers in Georgia. We are part of an
          international private investment group – Revery Group, which is
          developing Food & Beverage Businesses in Caucasus, Central Asia and
          Middle East markets.
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
            Iberia Refreshments excels in crafting exceptional carbonated
            beverages. Our commitment to quality ingredients, innovation, and
            sustainability sets us apart as an industry leader.
          </p>
          <p>
            Meticulously sourcing the finest ingredients, we create a diverse
            range of flavors that cater to various tastes. Our state-of-the-art
            manufacturing facility, coupled with cutting-edge technology,
            ensures consistent quality and carbonation in every drink. With a
            focus on eco-friendly practices and responsible sourcing, we strive
            to minimize our environmental impact.
          </p>
          <p>
            At Iberia Refreshments, we take pride in offering beverages that
            delight consumers and leave a positive mark on the planet.
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
            Welcome to Iberia Refreshments, where our passion for refreshing
            beverages meets the world of retail! At Iberia Refreshments, we
            believe that retail is not just about transactions; it's about
            creating memorable experiences for our valued customers. Our
            commitment to excellence and customer satisfaction drives us to go
            above and beyond, ensuring that every interaction leaves a lasting
            positive impression. <br /> <br />
            In the realm of retail, we embrace challenges as opportunities for
            growth, and we approach each day with enthusiasm and determination.
            We know that success in retail comes from understanding our
            customers' needs, anticipating their desires, and delivering
            products that delight and inspire.
            <br /> <br /> As a team, we constantly strive to innovate and adapt,
            keeping up with the ever-evolving retail landscape. We believe in
            the power of teamwork and collaboration, where each member's unique
            talents contribute to our collective success. <br /> <br />
            With a positive attitude and unwavering dedication, we embark on
            this retail journey, embracing change and embracing every moment as
            an opportunity to make a difference. Together, we are ready to
            create a retail experience that goes beyond expectations, leaving a
            trail of satisfied and motivated customers. Join us on this exciting
            adventure at Iberia Refreshments, where refreshing beverages and
            retail magic come together to create extraordinary moments.
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
