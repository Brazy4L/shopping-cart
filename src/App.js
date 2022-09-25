import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Items from './components/Items';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';

const App = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop(Items);
    // eslint-disable-next-line
  }, []);

  function LayoutsWithNavbar() {
    return (
      <>
        <Navbar shop={shop} />
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop shop={shop} setShop={setShop} />}
          />
          <Route
            path="/cart"
            element={<Cart shop={shop} setShop={setShop} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
