// src/Components/ChatRoom.js
import React, { useState } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([
    'Hello!',
    'How are you?',
    // ... add some initial messages
  ]);

  return (
    <div className="chat-room">
      <div className="messages" style={{ overflowY: 'scroll', height: '200px' }}>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setMessages([...messages, e.target.value]);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default ChatRoom;