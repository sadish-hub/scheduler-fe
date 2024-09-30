import "./sidebar.css";
import { assets } from "../../assets/assets";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPersonBooth } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiCalendarScheduleFill } from "react-icons/ri";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          alt="menu-icon"
          onClick={() => {
            setExtended((prev) => !prev);
          }}
        />
        <div className="recent">
          <NavLink
            to="/onboarding"
            className={({ isActive }) =>
              `bottom-item recent-entry ${isActive ? "active-link" : ""}`
            }
          >
            <FaPersonBooth size={24} title="Onboarding" />
            {extended ? <p>Onboarding</p> : null}
          </NavLink>
          <NavLink
            to="/add-employee"
            className={({ isActive }) =>
              `bottom-item recent-entry ${isActive ? "active-link" : ""}`
            }
          >
            <IoMdPersonAdd size={24} title="Add employee" />
            {extended ? <p>Add employee</p> : null}
          </NavLink>
          <NavLink
            to="/employee"
            className={({ isActive }) =>
              `bottom-item recent-entry ${isActive ? "active-link" : ""}`
            }
          >
            <BsFillPersonLinesFill size={24} title="Employee" />
            {extended ? <p>Employees</p> : null}
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `bottom-item recent-entry ${isActive ? "active-link" : ""}`
            }
          >
            <RiCalendarScheduleFill size={24} title="Schedule" />
            {extended ? <p>Schedule</p> : null}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
