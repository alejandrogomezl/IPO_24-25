// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from  './components/Footer';
import Home from './pages/Home';
import VehicleList from './components/VehicleList';

function App() {
  return (
    <BrowserRouter>
    <Header />
    


    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/" element={<VehicleList />} />
    </Routes>

    <Footer />
    </BrowserRouter>

    
  );
}

export default App;
