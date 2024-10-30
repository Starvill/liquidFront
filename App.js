// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonalSale from './pages/PersonalSale';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/personal-sale" element={<PersonalSale />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
