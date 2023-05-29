import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Navb from "./components/Navb";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Navb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Project" element={<Project />} />
        <Route path="Skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
