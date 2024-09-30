import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
import Chat from "../chat/Chat";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className="main">
      <div className="holder">
        <div className="top">
          <div className="info">For any questions, try our assistant!</div>
          <form className="shift-form space-y-5">
            <div className="form-group">
              <input
                type="text"
                id="shiftLength"
                name="shiftLength"
                placeholder="Enter opening hours"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="availability"
                name="availability"
                placeholder="Enter your availability"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="maxWorkingHours"
                name="maxWorkingHours"
                min="1"
                max="168"
                placeholder="Enter the maximum no. of staff count per hour"
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
        <Chat />
      </div>
    </div>
  );
};

export default Main;
