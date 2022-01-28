import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//static imports
import './css/styles.css';

//components imports
import Navigation from './components/Navigation';
import Menu from './pages/Menu';
import Footer from './components/Footer';

//pages imports
import Tiempo from './pages/Tiempo';
import EstacionesDeServicio from './pages/EstacionesDeServicio';
import Restaurantes from './pages/Restaurantes';
import Farmacias from './pages/Farmacias';
import Hoteles from './pages/Hoteles';


import Testing from './pages/Testing';

function App() {

  return (
    <div className="page-container">

      <div className="content-wrap">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/tiempo" element={<Tiempo />} />
            <Route path="/estaciones-de-servicio" element={<EstacionesDeServicio />} />
            <Route path="/farmacias" element={<Farmacias />} />
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="*" element={<h3>404 not found</h3>} />
            <Route path="/test" element={<Testing />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div >
  )
}

export default App;