import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyContainer from "../componenents/BodyCotainer";
import AppDesign from "../pages/AppDesign";
import Company from "../pages/Company";
import Contact from "../pages/Contact";
import GraphicDesign from "../pages/GraphicDesign";
import Location from "../pages/Location";
import WebDesign from "../pages/WebDesign";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<BodyContainer />}>
        <Route path="/" element={<Company />} />
        <Route path="/location" element={<Location />} />
        <Route path="/web_design" element={<WebDesign />} />
        <Route path="/graphic_design" element={<GraphicDesign />} />
        <Route path="/app_design" element={<AppDesign />} />
      </Route>
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

const Navigation = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
};
export default Navigation;
