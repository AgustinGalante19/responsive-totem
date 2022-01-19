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