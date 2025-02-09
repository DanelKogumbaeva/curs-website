import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<MainPage />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
