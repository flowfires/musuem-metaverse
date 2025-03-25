// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// 创建 Context
const AuthContext = createContext();

// 使用这个 hook 来访问全局状态
export function useAuth() {
  return useContext(AuthContext);
}

// Provider 组件来包裹整个应用
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 用来管理登录状态

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}
