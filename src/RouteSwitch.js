import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
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
    </>
  );
}

export default RouteSwitch;
