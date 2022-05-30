import React from 'react';
import './MainNavigation.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const MyComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="TotalMain">
      <header className="MainNavigation">
        <Link to="/" className="title">
          Nurse on Duty
        </Link>
        <div className="btn">
          <Link to="/auth/login" className="loginBtn">
            로그인
          </Link>
          <p>&nbsp;</p>
          <Link to="/auth/signup" className="signBtn">
            회원가입
          </Link>
        </div>
      </header>

      <main className="contents">
        <Outlet />
      </main>
    </div>
  );
};

export default MyComponent;
