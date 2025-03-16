import Header from './Header.jsx'

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
    <>
    <Header></Header>

    </>
  );

}

export default App
