import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // 引入useNavigate
import './App.css';
import HomePage from './HomePage';
import VirtualExhibit from './VirtualExhibit';
import DigitalPerson from './DigitalPerson';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 管理登录状态
  const navigate = useNavigate(); // 初始化导航

  const handleLogin = () => {
    setIsLoggedIn(true); // 登录操作，改变状态
    navigate('/admin-panel'); // 登录后跳转到管理员面板
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virtual-exhibit" element={<VirtualExhibit />} />
        <Route path="/digital-person" element={<DigitalPerson />} />
        
        <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/admin-panel" element={isLoggedIn ? <AdminPanel /> : <AdminLogin onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;