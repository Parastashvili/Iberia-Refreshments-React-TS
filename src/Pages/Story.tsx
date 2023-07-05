import { styled } from "styled-components";
export default function Story() {
  return (
    <Container>
      <div className="container">
        <section>
          <h1>Page One</h1>
        </section>
        <section>
          <h1>Page Two</h1>
        </section>
        <section>
          <h1>Page Three</h1>
        </section>
        <section>
          <h1>Page Four</h1>
        </section>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  .container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      scroll-snap-align: start;
      &:nth-child(1) {
        background-color: blue;
      }
      &:nth-child(2) {
        background-color: yellow;
      }
      &:nth-child(3) {
        background-color: green;
      }
      &:nth-child(4) {
        background-color: red;
      }
    }
  }
`;
