import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css'; // Añadir esta línea

function App() {
  return (
    <Router>
      <div className="container"> {/* Clase de Bootstrap */}
        <nav>
          <ul className="nav nav-pills"> {/* Clase de Bootstrap */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Clase de Bootstrap */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> {/* Clase de Bootstrap */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link> {/* Clase de Bootstrap */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
