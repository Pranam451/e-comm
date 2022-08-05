import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* product path shold be changed to /product/:id */}
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
