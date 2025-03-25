// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 移除 useNavigate，因为不再需要手动控制导航
import './App.css';
import HomePage from './HomePage';
import VirtualExhibit from './VirtualExhibit';
import DigitalPerson from './DigitalPerson';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import { AuthProvider, useAuth } from './AuthContext'; // 引入 AuthContext

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virtual-exhibit" element={<VirtualExhibit />} />
        <Route path="/digital-person" element={<DigitalPerson />} />
        
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
