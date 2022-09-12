import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import LeadersPage from '../src/app/pages/LeadersPage';
import Events from '../src/app/pages/Events';
import Calendar from '../src/app/pages/Calendar';
import AboutUs from '../src/app/pages/AboutUs';
import ContactUs from '../src/app/pages/ContactUs';
import Credo from '../src/app/pages/Credo';
import Navigator from '../src/components/Navigator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Routes>
          <Route path='/leader/:leaderId' element={<LeadersPage />} />
          <Route path='events' element={<Events />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='contactUs' element={<ContactUs />} />
          <Route path='credo' element={<Credo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;