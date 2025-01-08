import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Readme from "./Components/Readme";
import Explorer from "./Components/ExploreMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="readme" element={<Readme />} />
        <Route path="explorer" element={<Explorer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
