import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Hum from "../assets/hum.svg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
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
        img={Hum}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
      />
      
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
