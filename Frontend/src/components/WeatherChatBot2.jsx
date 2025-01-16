import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { generateContent } from './Model';
import cloudy from '../assets/cloudy.png'
import gem from '../assets/google-bard-logo-512.png'

const WeatherChatBot2 = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Focus on the input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //Clear all history
  const handleClear = () => {
    setUserInput('');
    setResponse([]);
    setIsLoading(false);
  };

  //Submit 
  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setResponse([{ type: "system", message: "Please enter a prompt.." }]);
      return;
    }

    setIsLoading(true);
    try {
      //generateContent is in Model
      const res = await generateContent(userInput);
      setResponse(prevResponse => [
        ...prevResponse,
        //show the newest messages and response
        { type: "user", message: userInput },
        { type: "bot", message: res() },
      ]);
      setUserInput('');
    } catch (err) {
      console.error("Error generating response:", err);
      setResponse(prevResponse => [
        ...prevResponse,
        //error
        { type: "system", message: "Failed to generate response" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  //when we press enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="chat-container">
      {response.length === 0 ? (
        <div className="m-3 text-black font-bold">
          <div className="justify-center flex">
            <img className="w-[50px] h-[50px] m-2" src={cloudy} />
            <h3 className="mt-4">+</h3>
            <img className="w-[50px] h-[50px] m-2" src={gem} />
          </div>
          Me,Gemini become a weather Assistant!.You can have ask me about weather.
        </div>
      ) : (
        <div className="chat-history">
          {response.map((msg, index) => (
            <p key={index} className={`text-black ${msg.type}`}>
              {msg.message}
            </p>
          ))}
          {
            //isLoading(true)
            isLoading && <p className="text-black font-bold">Generating response...</p>
          }
        </div>
      )}

      <div className="input-container">
        <button onClick={handleClear} className="clear-btn">Clear</button>

        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleKeyPress}
          placeholder="Type your message here..."
          className="chat-input"
        />

        <button onClick={handleSubmit} className="send-btn">
          <IoIosSend
            size={35}
            className="p-1"
          />
        </button>
      </div>
    </div>
  )
}

export default WeatherChatBot2
