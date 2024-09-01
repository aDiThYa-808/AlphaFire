import React from 'react';
import Navbar from './components/Navbar';
import Corousel from './components/Corousel';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {


  
  return (
    <div>
      <Navbar />
      <Corousel id="home" />
      <AboutUs id="about-us" />
      <Products id="products" />
      <Footer id="footer" />
    </div>
  );
}

export default App;