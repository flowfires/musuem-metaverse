import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  return (
    <div className="home">
      {/* 导航栏 */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/virtual-exhibit">虚拟展区</Link>
          </li>
          <li>
            <Link to="/digital-person">数字人互动</Link>
          </li>
        </ul>
        {/* 管理员入口按钮 */}
        <div className="admin-login-link">
          <Link to="/admin-login">管理员登录</Link>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="main-content">
        <h1>欢迎来到文博元宇宙</h1>
        <p>选择一个入口体验文博场景和数字人互动</p>
      </div>

      {/* 尾栏 */}
      <footer className="footer">
        <p>© 2025 文博元宇宙 | 版权所有</p>
      </footer>
    </div>
  );
}

export default HomePage;
