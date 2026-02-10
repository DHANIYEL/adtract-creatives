import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import WeddingCardScreen from "./pages/WeddingCardScreen";
import ServiceScreen from "./pages/ServiceScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />

      <Route path="/services" element={<ServiceScreen />} />
      <Route path="/wedding-cards" element={<WeddingCardScreen />} />
    </Routes>
  );
};

export default App;
