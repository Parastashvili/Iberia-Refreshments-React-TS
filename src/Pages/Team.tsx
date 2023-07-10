import { styled } from "styled-components";
import Header from "../components/HeaderStrip/Header";
import NextBanner from "../components/NextBanner/NextBanner";
import Hum from "../assets/hum.svg";
import Footer from ".././components/Footer/Footer";
import BG from "../assets/bg.png";
// import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Member from "../components/Team/Member";
import khatia from "../assets/team/1655455765191.jpg";

export default function Story() {
  // const navigate = useNavigate();

  // const navigation = (path: any) => {
  //   navigate(path);
  // };
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
      <Team>
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
        <Member
          name="Khatia Gorgadze"
          position="HR Specialist"
          img={khatia}
          link="https://www.linkedin.com/in/khatia-gorgadze-610447242/"
          details="I have a deep passion for coding and am always looking for new challenges to improve my skills and knowledge. 🤓💪 I believe that coding is not just a skill, but a mindset that allows me to solve problems and create innovative solutions. My approach to coding is to combine creativity and technical skills to deliver exceptional results. 🚀💡 Feel free to explore my profile and projects, and don't hesitate to get in touch with me for any collaboration or discussion."
        />
      </Team>
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
const Team = styled.div`
  width: calc(100%-4rem);
  background-color: #202020;
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
