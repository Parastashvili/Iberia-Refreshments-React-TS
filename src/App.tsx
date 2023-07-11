import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Team from "./Pages/Team";
import Retail from "./Pages/Retail";
import Capital from "./Pages/Capital";
import NotFoundPage from "./Pages/Error-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/team" element={<Team />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
