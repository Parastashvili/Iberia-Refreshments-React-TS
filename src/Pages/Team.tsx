import story2 from "../assets/story2.svg";
import { styled } from "styled-components";
export default function Team() {
  return (
    <Div1>
      <Div2 style={{ backgroundImage: `url(${story2})` }} />
    </Div1>
  );
}
const Div2 = styled.div`
  width: 50%;
`;
const Div1 = styled.div`
  width: 100%;
  height: 100vh;
`;
