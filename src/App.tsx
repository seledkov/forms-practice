import React from 'react';
import LoginPage from './Components/Login/LoginPage';
import DashboardPage from './Components/Dashboard/DashboardPage';
import { useState } from 'react';
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='App'>
      {!isLogin && <LoginPage onSetIsLogin={setIsLogin} />}
      {isLogin && <DashboardPage />}
    </div>
  );
};

export default App;
