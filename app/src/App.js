import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './Homepage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    
    </>
  );
}

export default App;
