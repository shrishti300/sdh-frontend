import React from "react";
//import './App.css';
import "tailwindcss/tailwind.css";
import Register from "./Pages/Register.js";
import FetchDetails from "./Pages/FetchDetails";
import FetchDisplay from "./Pages/FetchDisplay";
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
          <Route path="/register" element={<Register />} />

<Route path="/fetchdetails" element={<FetchDetails />} />
<Route path="/fetchdisplay" element={<FetchDisplay />} />
            </Routes>
            
    </Router>
  );
}

export default App;
