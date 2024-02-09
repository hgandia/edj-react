import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import LeadersPage from "../src/app/pages/LeadersPage";
import Navigator from "../src/components/Navigator";
import ContactUs from "../src/app/pages/ContactUs";
import Calendar from "../src/app/pages/Calendar";
import BiblePage from "./app/pages/BiblePage";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Events from "../src/app/pages/Events";
import { useEffect } from "react";
import "./App.css";

function App() {
  let match = useMatch("/:pathname");

  const ScrollToTopOnPageChange = () => {
    useEffect( () => {
      window.scrollTo(0, 0);
    })
  }

  return (
    <div className="App">
      <ScrollToTopOnPageChange />
      <Header match={match} />
      <Navigator />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/:pathname" element={<LeadersPage />} />
        <Route path='/:pathname/bible' element={<BiblePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
