// App.js
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from  './components/Footer';
import Home from './pages/Home';
import VehicleList from './components/VehicleList';
import Inquiry from './pages/Inquiry';
import MechInquiry from './pages/mechInquiry';
import CarBuy from './pages/CarBuy';
import MechMain from './pages/mechMain'
import AddCar from './pages/addCar';
import Payments from './pages/PaymentPage';
import CarIdentify from './pages/CarIdentify';

function App() {
  return (
    <BrowserRouter>
    <Header />
    


    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/" element={<VehicleList />} />
        <Route path="/inquiry/:id" element={<Inquiry />} />
        <Route path="/mech-inquiry" element={<MechInquiry />} />
        <Route path="/details" element = {<CarBuy />} />
        <Route path="/mech-main"element = {<MechMain />} />
        <Route path="/add-car"element = {<AddCar />} />
        <Route path="/vehicles/:id" element = {<CarBuy />} />
        <Route path="/payment/:id" element = {<Payments />} />
        <Route path="/identify" element = {<CarIdentify />} />
    </Routes>

    <Footer />
    </BrowserRouter>

    
  );
}

export default App;
