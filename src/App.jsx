import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Alimentos from './pages/Alimentos.jsx'
import Apicultura from './pages/Apicultura.jsx'
import Informatica from './pages/Informatica.jsx'
import NaoEncontrada from './pages/NaoEncontrada'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <nav>
        <img src="src/assets/logo-ifrn.png" alt="Logo" />
        
        <div className="links">
          <Link to="/">Início</Link>
          <Link to="/alimentos">Alimentos</Link>
          <Link to="/apicultura">Apicultura</Link>
          <Link to="/informatica">Informática</Link>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/apicultura" element={<Apicultura />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </div>
  )
}

export default App
