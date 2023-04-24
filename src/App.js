import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Cats from "./pages/Cats";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exact path="/cats" element={<Cats />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
