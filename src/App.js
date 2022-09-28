import React from "react";
//import './App.css';
import "tailwindcss/tailwind.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import DashBoard from "./Pages/DashBoard.js";
const App=()=> {
  return (
    <Router>
    <Routes>
     <Route
            path="/dashboard" element={<DashBoard />} />
            </Routes>
    </Router>
  );
}

export default App;
