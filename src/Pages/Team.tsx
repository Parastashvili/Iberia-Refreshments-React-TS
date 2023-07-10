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
import "aos/dist/aos.css";

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
