// Calendar.js
import React from "react";
import "./employeeCalendar.css";

const statusColors = {
  Available: "bg-green-100",
  Unavailable: "bg-red-100",
  Assigned: "bg-blue-100",
  "No Data": "bg-gray-100",
};

const Calendar = ({ month, year, availability }) => {
  return (
    <div className="cal flex flex-wrap items-center text-black rounded-t-lg">
      <div style={{ width: "98%" }}>
        {availability.map((week) => (
          <div key={week.weekNumber}>
            <div className="cal-header flex flex-wrap items-center">
              <div className="cal-header-row">
                <span className="block">Week {week.weekNumber}</span>
              </div>
              {week.days.map((day) => (
                <div key={day.day} className="cal-header-row p-2">
                  <span className="block">{`${day.day} ${day.date}`}</span>
                </div>
              ))}
            </div>
            <div className="cal-value flex flex-wrap items-center rounded-t-lg">
              <div className="cal-value-row">
                {/* Empty cell for Week Number alignment */}
              </div>
              {week.days.map((day, index) => (
                <div key={index} className="cal-value-row">
                  {day.status ? (
                    <div
                      className={`row-box text-gray-500 text-sm font-semibold w-28 h-12 flex flex-col items-center justify-center ${
                        statusColors[day.status.type] || "bg-gray-500"
                      }`}
                    >
                      <div className="type">{day.status.type}</div>
                      {day.status.time && (
                        <span className="block hours font-normal">
                          {day.status.time}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`cal-value-row-box text-gray-500 text-sm font-semibold px-3 py-2 w-24 h-16 flex items-center justify-center ${statusColors["No Data"]}`}
                    >
                      No Data
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
