import React from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import './styles/App.css';


function App() {
  return (
    <div>
      <Navbar />      
      <About />
      <Display />     
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
