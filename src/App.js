import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
