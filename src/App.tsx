import "./App.css";
import Header from "./components/HeaderStrip/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NextBanner from "./components/NextBanner/NextBanner";
import UnderStrip from "./components/UnderStrip/UnderStrip";
import Hum from "./assets/hum.svg";
import Tree from "./assets/trees.svg";
import Field from "./assets/field.svg";
import Sea from "./assets/sea.svg";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <UnderStrip />
      <NextBanner buttonTxt="OUT STORY" img={Tree} />
      <NextBanner buttonTxt="OUT STORY" img={Hum} />
      <NextBanner buttonTxt="OUT STORY" img={Field} />
      <NextBanner buttonTxt="OUT STORY" img={Sea} />
    </>
  );
}

export default App;
