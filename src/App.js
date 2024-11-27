import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import Arrivals from './components/Arrivals';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useState } from 'react';
import About from './components/About';
import CategoryDashbord from './components/CategoryDashbord';
import Resource from './components/Resource';
// import PagesDashbord from './components/PagesDashbord';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

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
        <Route exact path='/categoryDashbord' element={<CategoryDashbord />} />
        <Route exact path='/resources' element={<Resource />} />
        {/* <Route exact path='/pagesDashbord' element={<PagesDashbord />} /> */}
        <Route exact path='/termsAndConditions' element={<TermsAndConditions />} />
        <Route exact path='/privacyPolicy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
