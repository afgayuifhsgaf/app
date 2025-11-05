import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Consultas from './pages/Consultas';
import Vacinas from './pages/Vacinas';
import Cirurgias from './pages/Cirurgias';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/vacinas" element={<Vacinas />} />
        <Route path="/cirurgias" element={<Cirurgias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;