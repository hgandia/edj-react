import { React } from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import Header from "../src/components/Header";
import Navigator from "../src/components/Navigator";
import LeadersPage from "../src/app/pages/LeadersPage";
import Events from "../src/app/pages/Events";
import Calendar from "../src/app/pages/Calendar";
import ContactUs from "../src/app/pages/ContactUs";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  let match = useMatch("/:pathname");

  return (
    <div className="App">
      <Header match={match} />
      <Navigator />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        {/* <Route path='/' element={ <LeadersPage />} /> */}
        <Route path="/:pathname" element={<LeadersPage />} />
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
