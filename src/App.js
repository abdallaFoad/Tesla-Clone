import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import SolarPanels from "./pages/SolarPanels";
import SolarRoof from "./pages/SolarRoof";
import Shop from "./pages/Shop";
import TeslaAccount from "./pages/TeslaAccount";
import ArrowTop from "./components/ArrowTop";



function App() {
  return (
    <div className="App">
      <Header />
      <ArrowTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="ModelS" element={<ModelS />} />
        <Route path="/ModelX" element={<ModelX />} />
        <Route path="/ModelY" element={<ModelY />} />
        <Route path="/solarPanels" element={<SolarPanels />} />
        <Route path="/solarRoof" element={<SolarRoof />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/teslaAccount" element={<TeslaAccount />} />
      </Routes>
    </div>
  );
}

export default App;
