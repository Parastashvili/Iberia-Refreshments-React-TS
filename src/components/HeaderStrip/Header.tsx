import logo from "../../assets/logo.png";
import Burger from ".././BurgerMenu/Burger";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const navigation = (path: any) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Head>
      <Burger />
      <Image onClick={() => navigation("/")} src={logo} alt="" />
    </Head>
  );
}
const Image = styled.img`
  width: 180px;
  cursor: pointer;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95px;
  background: #e4e5e7;
  position: fixed;
  z-index: 30;
  top: 0px;
`;
