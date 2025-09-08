import { Route, Routes } from "react-router-dom";
import scrollBackGroundImage from "./assets/scrollBackground.png";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import Faves from "./pages/Faves";

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${scrollBackGroundImage})` }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/faves" element={<Faves />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
