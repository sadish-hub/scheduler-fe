import "./Employee.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
import ChatInput from "../ui/ChatInput";
import { useNavigate } from "react-router-dom";

const mockEmployees = [
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Elm St, Metropolis",
    photoUrl: assets.another_person_icon,
  },
  {
    id: 3,
    name: "Will Smith",
    address: "780 Bob St, Texas",
    photoUrl: assets.third_person_icon,
  },
  {
    id: 4,
    name: "John Doe",
    address: "123 Main St, Springfield",
    photoUrl: assets.user_icon,
  },
  // Add more mock employees as needed
];

const Employee = () => {
  const { onSent, setInput, input } = useContext(Context);

  const navigate = useNavigate();

  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="list-employee">
      <div className="list-employee-container">
        <div className="head">Manage your employees</div>
        <div className="sub">Let me know if you need any help</div>
        <div className="list-employee-profile">
          {mockEmployees.map((employee) => (
            <div key={employee.id} className="employee-row">
              <div className="employee-column">
                <img
                  src={employee.photoUrl}
                  alt={`${employee.name}'s photo`}
                  className="employee-photo"
                />
              </div>
              <div className="employee-column employee-info">
                <strong>{employee.name}</strong>
                <p>{employee.address}</p>
              </div>
              <div className="employee-column profile">
                <button
                  className="profile-button"
                  onClick={() => handleProfileClick(employee.id)}
                >
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
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

export default Employee;
