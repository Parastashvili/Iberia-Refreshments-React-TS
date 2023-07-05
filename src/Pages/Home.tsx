import Header from "../components/HeaderStrip/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NextBanner from "../components/NextBanner/NextBanner";
import UnderStrip from "../components/UnderStrip/UnderStrip";
import Hum from "../assets/hum.svg";
import Tree from "../assets/trees.svg";
import Field from "../assets/field.svg";
import Sea from "../assets/sea.svg";
import Footer from ".././components/Footer/Footer";
import { styled } from "styled-components";
import BG from "../assets/bg.png";
function App() {
  return (
    <>
      <div className="one">
        <Main />
        <Header />
        <HeroBanner />
        <UnderStrip />
      </div>
      <div className="two">
        <NextBanner
          buttonTxt="OUT STORY"
          img={Tree}
          colorLeft="#ed1c24"
          colorRight="#ed1c24"
        />
      </div>
      <div className="three">
        <NextBanner
          buttonTxt="OUT TEAM"
          img={Hum}
          colorLeft="#ed1c24"
          colorRight="#FFFFFF"
        />
      </div>
      <div className="four">
        <NextBanner
          buttonTxt="FOOD & BEVERAGES AND RETAIL"
          img={Field}
          colorLeft="#1354a4"
          colorRight="#FFFFFF"
        />
      </div>
      <div className="five">
        <NextBanner
          buttonTxt="VENTURE CAPITAL"
          img={Sea}
          colorLeft="#feb01a"
          colorRight="#FFFFFF"
        />
      </div>
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
