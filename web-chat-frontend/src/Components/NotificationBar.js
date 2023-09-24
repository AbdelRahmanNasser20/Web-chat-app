// src/Components/NotificationBar.js
import React, { useState, useEffect } from 'react';

function NotificationBar() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Here you can fetch the flashed messages from your backend
    // For now, we'll just simulate a flashed message
    const timer = setTimeout(() => {
      setMessages(['You have successfully logged in!']);
    }, 1000);
    
    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notification-bar">
      {messages.map((message, index) => (
        <div key={index} className="alert alert-success" role="alert">
          {message}
        </div>
      ))}
    </div>
  );
}

export default NotificationBar;