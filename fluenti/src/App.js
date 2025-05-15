import './App.css';
import LandingPage from './Components/LandingPage';
import Login from './Components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
