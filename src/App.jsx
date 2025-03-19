import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from './LoginSignup.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import { useEffect } from "react";

function App() {

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

  return(
        <Router>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      );

    
  

}

export default App
