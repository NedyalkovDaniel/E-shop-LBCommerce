import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginSignup from "./LoginSignup.jsx";
import Layout from "./Layout.jsx";
import Homes from "./Homes.jsx";
import VehicleSearch from "./Vehicle.jsx"
import VinSearch from "./VinSearch.jsx";
import Universal from "./Universal.jsx";
import Footer from "./Footer.jsx";
import CategoryPage from "./CategoryPage.jsx";
import BrandPage from "./BrandPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import CartPage from "./CartPage.jsx"
import Checkout from "./checkout.jsx"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    document.title = "LBCommerce";
  }, []);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="vin" element={<VinSearch />} />
            <Route path="vehicle" element={<VehicleSearch />} />
            <Route path="universal" element={<Universal />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/brands/:brandSlug" element={<BrandPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login-signup" />} />
        )}

        <Route path="/login-signup" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


