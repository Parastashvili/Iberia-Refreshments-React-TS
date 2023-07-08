import styled from "styled-components";
export default function Footer() {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>Our Story</li>
        <li>Our Team</li>
        <li>Food & Beverages and Retail</li>
        <li>Venture Capital</li>
      </ul>
      <p>&copy; Iberia Refreshments, All Rights Reserved.</p>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: #e4e5e6;
  ul {
    background-color: #e4e5e6;
    padding: 30px;
    max-height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 0.5rem solid #202020;
    color: #212529;
    text-align: center;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    user-select: none;
    opacity: 0.8;
    @media (max-width: 796px) {
      flex-direction: column;
      gap: 10px;
    }
    li {
      cursor: pointer;
      transition: 0.5s ease;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
  p {
    background-color: #e4e5e6;
    color: #212529;
    text-align: center;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding: 5px;
    user-select: none;
  }
`;
