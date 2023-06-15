import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';



const products = [
  {
    name: 'Wireless Keyboards',
    items: [
      { id: 1, name: 'Halo 65', image: require('./images/keebs/halo65-black.webp'), description: 'This is an example' },
      { id: 2, name: 'Halo 65', image: require('./images/keebs/halo65-white.webp'), description: 'This is an example' },
      // Add more items
    ],
  },
  // Add more categories

  {
    name: 'Keycaps',
    items: [
      { id: 3, name: 'Cherry Profile Shine-through Keycaps', image: require('./images/keycaps/Keycap-Black.webp'), description: 'This is an example' },
      { id: 4, name: 'Shiokaze nSA PBT Keycaps', image: require('./images/keycaps/Keycap-Blue.webp'), description: 'This is an example' },
      // Add more items
    ],
  },

  {
    name: 'Switches',
    items: [
      { id: 5, name: 'NuPhy Polaris Switches', image: require('./images/switches/NuPhy Polaris Switches.webp'), description: 'This is an example' },
      { id: 6, name: 'NuPhy Fleeting Gold Switches', image: require('./images/switches/NuPhy Fleeting Gold Switches.webp'), description: 'This is an example' },
      // Add more items
    ],
  },
];


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:productId" element={<ProductPage products={products} />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes for additional pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
