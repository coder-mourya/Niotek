import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import Arrivals from './components/Arrivals';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  return (
   
     <>
      <Navbar setIsNavbarExpanded={setIsNavbarExpanded}/>
      <Routes>
        <Route exact path='/' element={<Home isNavbarExpanded={isNavbarExpanded} />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/arrivals' element={<Arrivals />} />
        <Route exact path='/reviews' element={<Reviews />} />
      </Routes>
      <Footer />
     </>
    
  );
}

export default App;
