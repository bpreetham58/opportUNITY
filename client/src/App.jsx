<<<<<<< HEAD
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
=======
import AppRouter from "./Router"
>>>>>>> e3dc7fc7a4e4cb94d72b2b6c23a69fcc11bcc337

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} /> {/* Default to Login page */}
      </Routes>
    </Router>
  );
};
=======
    <>
      <AppRouter />
    </>
  )
}
>>>>>>> e3dc7fc7a4e4cb94d72b2b6c23a69fcc11bcc337

export default App;