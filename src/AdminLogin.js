import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // 引入 useAuth
import { useNavigate } from 'react-router-dom'; //跳转
import './AdminLogin.css';

function AdminLogin() {
  const { login } = useAuth(); // 获取 login 函数
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // 默认账户密码
    const defaultUsername = 'admin';
    const defaultPassword = 'admin123';

    if (username === defaultUsername && password === defaultPassword) {
      login(); // 登录成功，调用 login 函数
      navigate('/');
    } else {
      setErrorMessage('用户名或密码错误');
    }
  };

  return (
    <div className="admin-login">
      <h2>管理员登录</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="请输入用户名" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="请输入密码" 
      />
      <button onClick={handleLogin}>登录</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default AdminLogin;
