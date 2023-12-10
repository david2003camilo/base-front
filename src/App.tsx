import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWordPage from "./pages/helloWorldPage/HelloWorldPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
