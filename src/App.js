import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import Arrivals from './components/Arrivals';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useState } from 'react';
import About from './components/About';
import Camera from './components/Camera';
import Resource from './components/Resource';

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  return (

    <>
      <Navbar setIsNavbarExpanded={setIsNavbarExpanded} />
      <Routes>
        <Route exact path='/' element={<Home isNavbarExpanded={isNavbarExpanded} />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/arrivals' element={<Arrivals />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cameras' element={<Camera />} />
        <Route exact path='/resources' element={<Resource />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
