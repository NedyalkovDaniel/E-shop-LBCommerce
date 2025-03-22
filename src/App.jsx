import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginSignup from './LoginSignup.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.type = "image/png";
      newLink.href = "/favicon.png";
      document.head.appendChild(newLink);
    } else {
      link.href = "/favicon.png";
    }
  }, []);

  useEffect(() => {
    document.title = "LBCommerce";
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? (
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login-signup" />
          )}
        />
        
        <Route path="/login-signup" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
        
      </Routes>
    </Router>
  );
}

export default App;

