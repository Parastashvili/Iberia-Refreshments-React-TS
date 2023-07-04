import "./App.css";
import Header from "./components/HeaderStrip/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NextBanner from "./components/NextBanner/NextBanner";
import UnderStrip from "./components/UnderStrip/UnderStrip";
import Hum from "./assets/hum.svg";
import Tree from "./assets/trees.svg";
import Field from "./assets/field.svg";
import Sea from "./assets/sea.svg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <UnderStrip />
      <NextBanner
        buttonTxt="OUT STORY"
        img={Tree}
        colorLeft="#ed1c24"
        colorRight="#ed1c24"
      />
      <NextBanner
        buttonTxt="OUT TEAM"
        img={Hum}
        colorLeft="#ed1c24"
        colorRight="#FFFFFF"
      />
      <NextBanner
        buttonTxt="FOOD & BEVERAGES AND RETAIL"
        img={Field}
        colorLeft="#1354a4"
        colorRight="#FFFFFF"
      />
      <NextBanner
        buttonTxt="VENTURE CAPITAL"
        img={Sea}
        colorLeft="#feb01a"
        colorRight="#FFFFFF"
      />
      <Footer/>
    </>
  );
}

export default App;
