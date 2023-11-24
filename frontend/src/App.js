import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="holder">
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/images" element={<Gallery/>} />
      </Routes>
    </div>
  );
}

export default App;
