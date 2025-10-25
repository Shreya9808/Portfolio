import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import About from "./components/About";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App(){
  return (<div>
    

    <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route path='' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/exp' element={ <Exp /> } />
      <Route path='/projects' element={ <Projects /> } />
      <Route path='/contact' element={ <Contact /> } />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
