import Header from "../components/HeaderStrip/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NextBanner from "../components/NextBanner/NextBanner";
import UnderStrip from "../components/UnderStrip/UnderStrip";
import Hum from "../assets/team/hum.png";
import Tree from "../assets/trees.jpg";
import Field from "../assets/field.jpg";
import Sea from "../assets/sea.jpg";
import Footer from ".././components/Footer/Footer";
import { styled } from "styled-components";
import BG from "../assets/bg.png";
function App() {
  return (
    <>
      <>
        <Main />
        <Header />
        <HeroBanner />
        <UnderStrip />
      </>
      <NextBanner
        page="/Story"
        buttonTxt="OUT STORY"
        img={Tree}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
        op="0.9"
      />
      <NextBanner
        page="/Team"
        buttonTxt="OUT TEAM"
        img={Hum}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
      />
      <NextBanner
        page="/Retail"
        op="0.9"
        buttonTxt="FOOD & BEVERAGES AND RETAIL"
        img={Field}
        colorLeft="#1354a4"
        colorRight="#FFFFFF"
      />
      <NextBanner
        page="/story"
        buttonTxt="Capital"
        img={Sea}
        colorLeft="#feb01a"
        colorRight="#FFFFFF"
        op="0.9"
      />
      <Footer />
    </>
  );
}

export default App;
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
