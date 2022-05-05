import React from 'react';
import './LoginElement.scss';
import './AuthTemplate.scss';
import { Link } from 'react-router-dom';

const LoginTemplate = () => {
  return (
    <div className="AuthTemplate">
      <div className="login-title">로그인</div>
      <div className="content">
        <div className="LoginElement">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button className="loginBtn" type="submit">
            로그인
          </button>
          <hr />
          <div className="otherElement">
            <Link to="/auth/findPW" className="findPasswordBtn">
              계정 찾기
            </Link>
            <Link to="/auth/signup" className="signBtn">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
