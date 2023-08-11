import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Team from "./Pages/Team";
import Retail from "./Pages/Retail";
import About from "./Pages/About";
import NotFoundPage from "./Pages/Error-page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Story" element={<Story />} />
            <Route path="Team" element={<Team />} />
            <Route path="Retail" element={<Retail />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
