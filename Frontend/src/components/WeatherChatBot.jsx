import ChatGptLogo from "../assets/pngwing.com.png"
import Cloudy from "../assets/cloudy.png"
import React, { useState } from 'react';
// import { getAssistantResponse } from '../utils/utils.js';
import axios from 'axios';

const WeatherChatBot = () => {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const OPENAI_API_KEY = process.env.VITE_REACT_APP_OPENAI_API_KEY;

  const getAssistantResponse = async (messages) => {
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const payload = {
      model: 'gpt-3.5-turbo', // or 'gpt-4'
      messages, // Directly pass the array of messages
      temperature: 0.7,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };

    try {
      const response = await axios.post(endpoint, payload, { headers });

      //The response from ChatGPT
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      throw error;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Define the messages array with a system role and user role
    const messages = [
      { role: 'system', content: 'You are a helpful assistant providing guidance and answers.' },
      { role: 'user', content: prompt }, // User input directly added here
    ];

    try {
      const assistantResponse = await getAssistantResponse(messages);
      setResponse(assistantResponse);
    } catch (error) {
      setResponse('Error getting response. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="w-[30%] h-[555px] mr-[10px] mt-[10px] border-[1px] border-gray-300 flex">
      <img src={ChatGptLogo} alt="ChatGpt" className="w-6 h-6 m-1" />
      <h1>+</h1>
      <img src={Cloudy} alt="ChatGpt" className="w-6 h-6 m-1" />
      <h1>:</h1>
      <div>
        <h1>Assistant</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            rows="4"
            cols="30"
          ></textarea>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Send'}
          </button>
        </form>
        {response && <p>Response: {response}</p>}
      </div>
    </div>
  )
}

export default WeatherChatBot
