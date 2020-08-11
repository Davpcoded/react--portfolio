import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <Modal />
      <Parallax />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
