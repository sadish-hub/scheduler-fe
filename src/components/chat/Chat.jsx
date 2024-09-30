import "./Chat.css";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import ChatInput from "../ui/ChatInput";
import { FaCopy } from "react-icons/fa";

const Chat = () => {
  const { onSent, recentPrompt, showResults, loading, resultData } =
    useContext(Context);

  return (
    <div className="chat">
      {!showResults ? (
        <>
          <div className="greet">
            <p>
              <span>Hello , </span>
            </p>
            <p>How can i help you today?</p>
          </div>
          <div className="cards">
            <div
              className="card"
              onClick={() =>
                handleCardClick("Suggest Some Place To Visit In India.")
              }
            >
              <div>
                <p>
                  <blockquote style={{ fontWeight: "bold" }}>
                    Store information default values:
                  </blockquote>
                  <br />
                  Opening hours: 08:00 - 21:00
                  <br />
                  Availability: Monday - Sunday
                  <br />
                  Staff count per hours: 3
                </p>
                <FaCopy
                  className="h-5 w-5"
                  style={{ alignSelf: "flex-start" }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={assets.user} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
      )}

      <div className="main-bottom">
        <div className="search-box">
          {/* <textarea
			onChange={(e) => {
				setInput(e.target.value);
			}}
			value={input}
			placeholder="Enter the Prompt Here"
		/> */}

          <ChatInput
            onSend={() => {
              onSent();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
