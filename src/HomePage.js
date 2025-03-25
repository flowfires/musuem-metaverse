import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';
import { useAuth } from './AuthContext';

function HomePage() {
  const { isLoggedIn,login } = useAuth();
  return (
    <div className="home">

      {/* 导航栏 */}
      <nav className="navbar">
        <div className="admin-login-link">
        {isLoggedIn?(<p>已进入管理员模式</p>):(<Link to="/admin-login">管理员登录</Link>)}
        </div>
      </nav>

      {/* 主页 Banner */}
      <div className="main-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         <span className="highlight">欢迎来到文博元宇宙</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          选择一个入口体验文博场景和数字人互动
        </motion.p>

        {/* 入口模块 */}
        <div className="entry-section">
          <motion.div
            className="entry-card"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/virtual-exhibit">
              <h2>虚拟展区</h2>
              <p>探索文物，沉浸式体验博物馆</p>
            </Link>
          </motion.div>

          <motion.div
            className="entry-card"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/digital-person">
              <h2>数字人互动</h2>
              <p>定制你自己的数字人形象</p>
              <p>与 AI 数字人对话，解锁文化故事</p>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* 页脚 */}
      <footer className="footer">
        <p>© 2025 文博元宇宙 | 版权所有</p>
      </footer>
    </div>
  );
}

export default HomePage;
