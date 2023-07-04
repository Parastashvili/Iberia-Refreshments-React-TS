import { styled } from "styled-components";
import blank from "../../assets/whitelogo.png";
const Logo = styled.div`
  background-image: url(${blank});
  width: 80px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  cursor: pointer;
`;
export default Logo;
