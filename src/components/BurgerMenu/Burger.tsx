import React from "react";
import styled from "styled-components";

interface BurgerLineProps {
  open: boolean;
}
const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <BurgerWrapper open={open} onClick={handleMenuToggle}>
        <BurgerLine open={open} />
        <BurgerLine open={open} />
        <BurgerLine open={open} />
      </BurgerWrapper>
      <Menu open={open}>
        <div>
          <li>HOME</li>
          <li>OUR STORY</li>
          <li>OUR TEAM</li>
          <li>FOOD & BEVERAGES AND RETAIL</li>
          <li>VENTURE CAPITAL</li>
        </div>
      </Menu>
    </Container>
  );
};
export default BurgerMenu;
const Container = styled.div`
  position: relative;
  @media (max-width: 240px) {
    display: none;
  }
`;
const BurgerWrapper = styled.div<BurgerLineProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  left: 50px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
`;
const BurgerLine = styled.div<BurgerLineProps>`
  width: 2rem;
  height: 0.2rem;
  background-color: ${({ open }) => (open ? "#0d0d0d" : "#000000")};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(50%)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
const Menu = styled.ul<BurgerLineProps>`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
  background-color: rgba(228, 229, 230, 0.9);
  font-family: "Archivo", sans-serif;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: -336px;
  height: 100vh !important;
  width: 336px;
  padding: 0;
  z-index: 15;
  transform: ${({ open }) => (!open ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  div {
    padding: 112px 32px;
    li {
      margin: 1rem;
      cursor: pointer;
      max-width: 170px;
    }
  }
`;
