import { React } from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LeadersPage from "../src/app/pages/LeadersPage";
import Events from "../src/app/pages/Events";
import Calendar from "../src/app/pages/Calendar";
//import AboutUs from "../src/app/pages/AboutUs";
import ContactUs from "../src/app/pages/ContactUs";
import Credo from "../src/app/pages/Credo";
import Navigator from "../src/components/Navigator";
import "./App.css";



function App() {

  let match = useMatch('/leader/:leaderId');
  console.log ('match is: ', match);

  return (
    <div className="App">
      <Header match={match} />
      <Navigator />
      <Routes>
        <Route path="/leader/:leaderId" element={<LeadersPage />} />
        <Route path="/leader/6" element={<Events />} />
        <Route path="/leader/7" element={<Calendar />} />
        {/* <Route path="aboutUs" element={<AboutUs />} /> */}
        <Route path="/leader/8" element={<ContactUs />} />
        <Route path="credo" element={<Credo />} />
        <Route path="/" element={<Navigate to="/leader/0" />} />
      </Routes><br />
      <Footer />
    </div>
  );
}

export default App;
