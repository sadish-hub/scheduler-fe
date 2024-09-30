import "./Profile.css";
import { assets } from "../../assets/assets";
import ChatInput from "../ui/ChatInput";
import EmployeeCalendar from "../employeeCalendar/EmployeeCalendar";
import { availabilityData } from "../employeeCalendar/availabilityData";

import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="profile">
      <div className="holder">
        <div className="details">
          <div className="header">
            <div className="profile-image">
              <img
                src={assets.third_person_icon}
                alt="Jane Smith's photo"
                className="photo"
              />
            </div>
            <div className="row">
              <div className="info1">
                <span className="name">Jane Smith</span>
                <p>
                  <span className="title">Phone:</span> 070 123 47 65
                </p>
                <p>
                  <span className="title">Email:</span> jane.smith@gmail.com
                </p>
                <p>
                  <span className="title">Address:</span> 456 Elm St, Metropolis
                </p>
              </div>
              <div className="info2">
                <p>
                  <span className="title">Date of birth:</span> 1995-09-09
                </p>
                <p>
                  <span className="title">Emergency contact:</span> Jennifer
                  Smith, Mother, 070 456 09 23
                </p>
              </div>
              <div className="edit">
                <button className="profile-button">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <EmployeeCalendar
          month="July"
          year={2024}
          availability={availabilityData}
        />
        <div className="main-bottom">
          <div className="search-box">
            <ChatInput
              onSend={() => {
                onSent();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
