import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Team from "./Pages/Team";
import Retail from "./Pages/Retail";
import Capital from "./Pages/Capital";
import NotFoundPage from "./Pages/error-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/Capital" element={<Capital />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
