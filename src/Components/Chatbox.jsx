import React, { useState } from 'react';
import '../css/Chatbot.css';
import { getBotReply } from '../ChatResponses';

const initialMessages = [
  { text: "Hi 👋 How can we help you navigate?", sender: "bot" }
];

const ChatBox = () => {

  // store messages
  const [messages, setMessages] = useState(initialMessages);

  // input field
  const [input, setInput] = useState("");

  // toggle open/close
  const [open, setOpen] = useState(false);

  const resetChat = () => {
    setMessages(initialMessages);
    setInput("");
  };

  // handle send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };

    // add user message
    setMessages(prev => [...prev, userMessage]);

    // generate bot reply based on input
    const botReply = getBotReply(input.trim());

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: botReply, sender: "bot" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chat-container">

      {/* Floating Button */}
      <div className="chat-toggle" onClick={() => {
        if (open) resetChat();
        setOpen(!open);
      }}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">

          {/* Header */}
          <div className="chat-header">
            <span>Support Chat</span>
            <button onClick={() => {
              resetChat();
              setOpen(false);
            }}>✖</button>
          </div>

          {/* Messages */}
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ChatBox;