//|| PAGES
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Stunting2021 from "./pages/Stunting2021/Stunting2021";
import Stunting2022 from "./pages/Stunting2022/Stunting2022";
import Stunting2023 from "./pages/Stunting2023/Stunting2023";
import MapboxStorytelling from "./pages/Storytelling/StoryTelling";
import About from "./pages/About/About";
import CompareMap from "./pages/CompareMap/CompareMap";

//|| LIBRARY
import { HashRouter, Routes, Route } from "react-router-dom";

// || STYLE
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Stunting2021" element={<Stunting2021 />} />
          <Route path="/Stunting2022" element={<Stunting2022 />} />
          <Route path="/Stunting2023" element={<Stunting2023 />} />
          <Route path="/Storytelling" element={<MapboxStorytelling />} />
          <Route path="/CompareMap" element={<CompareMap />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
