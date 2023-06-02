import { Routes, Route, Navigate, useMatch } from "react-router-dom";
//import { validateLogin, userLogout } from "./features/users/userSlice";
import LeadersPage from "../src/app/pages/LeadersPage";
import Navigator from "../src/components/Navigator";
import ContactUs from "../src/app/pages/ContactUs";
import Calendar from "../src/app/pages/Calendar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Events from "../src/app/pages/Events";
//import { useDispatch } from "react-redux";
//import { React, useEffect } from "react";
import "./App.css";

function App() {
  let match = useMatch("/:pathname");

  //const dispatch = useDispatch();

  // useEffect(() => {
  //    dispatch(validateLogin());
  // }, [dispatch]);

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
