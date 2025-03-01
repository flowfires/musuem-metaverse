import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 如果有全局样式
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 必须引入 BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>  {/* 用 BrowserRouter 包裹 App */}
    <App />
  </BrowserRouter>
);
