/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Akademik from "./components/academic";
import _header from "./components/header";
import _footer from "./components/footer";

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
      <_footer />
    </div>
  );
}

export default App;
