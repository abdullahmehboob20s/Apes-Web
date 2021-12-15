import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home/Home";
import Mint from "./pages/MintPage/mintPage";
import MyApes from "./pages/MyApesPage/myApesPage";

// navbar
import Navbar from "./components/Navbar/navbar";
import AppesCollection from "pages/AppesCollection/AppesCollection";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apes-collection" element={<AppesCollection />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/myApes" element={<MyApes />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
