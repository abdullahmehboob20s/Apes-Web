import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home/Home";
import Mint from "./pages/MintPage/mintPage";
import MyApes from "./pages/MyApesPage/myApesPage";

// navbar
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/myApes" element={<MyApes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
