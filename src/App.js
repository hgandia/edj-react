import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/app/pages/HomePage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Caballeros from '../src/app/pages/Caballeros';
import Damas from '../src/app/pages/Damas';
import Jovenes from '../src/app/pages/Jovenes';
import Ninos from '../src/app/pages/Ninos';
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
          <Route path='/' element={<HomePage />} />
          <Route path='caballeros' element={<Caballeros />} />
          <Route path='damas' element={<Damas />} />
          <Route path='jovenes' element={<Jovenes />} />
          <Route path='ninos' element={<Ninos />} />
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