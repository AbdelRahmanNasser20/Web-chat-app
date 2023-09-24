// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


// import MainLayout from './components/MainLayout';
import Login from './Components/Login';
import ChatRoom from './Components/ChatRoom';
import Navbar from './Components/Navbar';
import NotificationBar from './Components/NotificationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Router>
      <Navbar />
      <NotificationBar />
      <div className="App">
        <Navbar />
        <NotificationBar />
        <div style={{ paddingTop: '50px' }}> {/* Add padding to avoid content being hidden by NotificationBar */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;