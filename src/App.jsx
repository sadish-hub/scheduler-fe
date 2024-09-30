import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/addemployee/AddEmployee";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Employee from "./components/employee/Employee";
import Profile from "./components/profile/Profile";
import { assets } from "./assets/assets";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div id="main">
        <div id="nav">
          <p>Smart Scheduler</p>
          <img src={assets.user} alt="" />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/onboarding" element={<Main />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* <Route path="/schedule" element={<Schedule />} />  */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
