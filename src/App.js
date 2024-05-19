// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './components/About/About'
import Header from "./components/Header/Header"

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
