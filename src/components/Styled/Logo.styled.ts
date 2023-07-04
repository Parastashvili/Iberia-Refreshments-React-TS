import { styled } from "styled-components";
import blank from "../../assets/whitelogo.png";

const Logo = styled.div`
  background-image: url(${blank});
  width: 80px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(1px 1px 10px #e4e5e6);
  }
`;

export default Logo;
