import React, { useContext, useState } from "react";
import "./AddEmployee.css";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";

const AddEmployee = () => {
  const { onSent, setInput, input } = useContext(Context);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSent(formData);
    // Reset image preview on submit if needed
  };

  return (
    <div className="add-employee">
      <div className="add-employee-container">
        <div
          className="add-employee-top"
          style={{
            gap: "10",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className="shift-form space-y-6" onSubmit={handleSubmit}>
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                onClick={() =>
                  document.getElementById("profilePicture").click()
                }
                className="mt-1 block w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {profilePicture
                  ? "Change Profile Picture"
                  : "Upload Profile Picture"}
              </button>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={profilePicture || assets.person_icon}
                className="mt-4 rounded-full w-32 h-32 object-cover border border-gray-300"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="Date of Birth (yyyy-mm-dd)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                placeholder="In case of emergency contact"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
