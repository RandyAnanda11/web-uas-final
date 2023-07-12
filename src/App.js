/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import About from "./view/about";
import Contact from "./view/contact";
import Akademik from "./view/academic";
import _header from "./components/header";

function App() {
  return (
    <div className="App">
      <_header />
      <home />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/academic" element={<Akademik />}></Route>
      </Routes>
    </div>
  );
}

export default App;
