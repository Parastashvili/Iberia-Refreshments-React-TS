import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import img from "../assets/vecteezy_404-landing-page_6549647.jpg";
interface RouteError {
  statusText?: string;
  message?: string;
}
const useRouteError = (): RouteError | null => {
  const location = useLocation();
  const error = {
    statusText: "Not Found",
    message: `Page not found: ${location.pathname}`,
  };
  console.error(error);
  return null;
};
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <ErrorPageCont id="error-page">
      <h1>Oops!</h1>
      <img src={img} alt="" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </ErrorPageCont>
  );
};

export default ErrorPage;
const ErrorPageCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: #ed1c24;
    font-size: 30px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 34.56px;
    user-select: none;
  }
  img {
    width: 80%;
    max-width: 1920px;
  }
  p {
    color: #000;
    text-align: center;
    font-size: 25.8px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 200;
    line-height: 34.56px;
    user-select: none;
  }
`;
