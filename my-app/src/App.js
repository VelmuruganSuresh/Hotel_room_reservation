import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Home from './components/Home';
import History from './components/history';
import Booking from './components/booking';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null); // Global user state

  return (
    <Router>
      {/* Pass user state to Navbar */}
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
