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
  let match = useMatch("/leader/:leaderId");

  return (
    <div className="App">
      <Header match={match} />
      <Navigator />
      <Routes>
        <Route path="/leader/:leaderId" element={<LeadersPage />} />
        <Route path="/leader/6" element={<Events />} />
        <Route path="/leader/7" element={<Calendar />} />
        <Route path="/leader/8" element={<ContactUs />} />
        <Route path="/" element={<Navigate to="/leader/0" />} />
        <Route path="/leader" element={<Navigate to="/leader/0" />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
