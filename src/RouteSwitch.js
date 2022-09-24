import { useState, useEffect } from 'react';
import s1 from './components/images/s1.jpg';
import s2 from './components/images/s2.jpg';
import s3 from './components/images/s3.jpg';
import s4 from './components/images/s4.jpg';
import s5 from './components/images/s5.jpg';
import s6 from './components/images/s6.jpg';
import s7 from './components/images/s7.jpg';
import s8 from './components/images/s8.jpg';
import s9 from './components/images/s9.jpg';
import s10 from './components/images/s10.jpg';
import s11 from './components/images/s11.jpg';
import s12 from './components/images/s12.jpg';
import s13 from './components/images/s13.jpg';
import s14 from './components/images/s14.jpg';
import s15 from './components/images/s15.jpg';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';

const RouteSwitch = () => {
  const items = [
    {
      img: s1,
      name: 'Sneakers #1',
      price: 256,
      qty: 1,
      cart: false,
    },
    {
      img: s2,
      name: 'Sneakers #2',
      price: 728,
      qty: 1,
      cart: false,
    },
    {
      img: s3,
      name: 'Sneakers #3',
      price: 376,
      qty: 1,
      cart: false,
    },
    {
      img: s4,
      name: 'Sneakers #4',
      price: 643,
      qty: 1,
      cart: false,
    },
    {
      img: s5,
      name: 'Sneakers #5',
      price: 234,
      qty: 1,
      cart: false,
    },
    {
      img: s6,
      name: 'Sneakers #6',
      price: 865,
      qty: 1,
      cart: false,
    },
    {
      img: s7,
      name: 'Sneakers #7',
      price: 967,
      qty: 1,
      cart: false,
    },
    {
      img: s8,
      name: 'Sneakers #8',
      price: 120,
      qty: 1,
      cart: false,
    },
    {
      img: s9,
      name: 'Sneakers #9',
      price: 324,
      qty: 1,
      cart: false,
    },
    {
      img: s10,
      name: 'Sneakers #10',
      price: 460,
      qty: 1,
      cart: false,
    },
    {
      img: s11,
      name: 'Sneakers #11',
      price: 521,
      qty: 1,
      cart: false,
    },
    {
      img: s12,
      name: 'Sneakers #12',
      price: 743,
      qty: 1,
      cart: false,
    },
    {
      img: s13,
      name: 'Sneakers #13',
      price: 853,
      qty: 1,
      cart: false,
    },
    {
      img: s14,
      name: 'Sneakers #14',
      price: 634,
      qty: 1,
      cart: false,
    },
    {
      img: s15,
      name: 'Sneakers #15',
      price: 548,
      qty: 1,
      cart: false,
    },
  ];

  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop(items);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
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

function LayoutsWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RouteSwitch;
