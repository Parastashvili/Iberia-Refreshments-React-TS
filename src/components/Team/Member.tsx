import { styled } from "styled-components";
import { useState } from "react";
import linked from "../../assets/linkedin.svg";
import close from "../../assets/close.svg";
import "aos/dist/aos.css";
export default function Member(props: any) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Cont data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="avatar"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      ></div>
      <h3>{props.name}</h3>
      <p>{props.position}</p>
      {showDetails ? (
        <DetailsCont>
          <Details>
            <h3>{props.name}</h3>
            <p>{props.details}</p>
            <a href={props.link} target="blank">
              <img src={linked} alt="linkedin logo" />
            </a>
            <img
              onClick={() => {
                setShowDetails(!showDetails);
              }}
              className="close"
              src={close}
              alt="close icon"
            />
          </Details>
        </DetailsCont>
      ) : null}
    </Cont>
  );
}
const Cont = styled.div`
  h3 {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    text-transform: uppercase;
    @media (min-width: 992px) {
      font-size: 15px;
      line-height: 24px;
    }
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .avatar {
    filter: drop-shadow(10px 0px 10px #a0a0a0);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 70%;
    height: 300px;
    border-radius: 5px;
    transition: ease-in 0.3s;
    border-bottom: 7px solid transparent;
    cursor: pointer;
    @media (min-width: 992px) {
    }
    &:hover {
      translate: 0px -5px;
      border-bottom: 7px solid #3a90f9;
    }
  }
  p {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    @media (min-width: 992px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const DetailsCont = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
`;
const Details = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  opacity: 0.9;
  max-width: 70%;
  padding: 20px;
  border: 0.3rem solid #ed1c24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
  .close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 22px;
    margin-bottom: 12px;
    border-bottom: 5px solid #ffffff;
  }
  a {
    img {
      width: 72px;
      height: 72px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
