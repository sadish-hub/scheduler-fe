import React, { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    // Your send message logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents adding a new line
      handleSend();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex-1">
        <textarea
          ref={textareaRef}
          className="w-full resize-none border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          placeholder="Type a message..."
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ overflow: "hidden", height: "50px", maxHeight: "200px" }}
        />
      </div>
      <button
        onClick={handleSend}
        className="ml-3 flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        aria-label="Send Message"
      >
        <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
      </button>
    </div>
  );
};

export default ChatInput;
