/**
 * file: LoginTemplate.js
 * 로그인 레이아웃
 * 작성자: 정진욱
 */
import React, { useState } from 'react';
import axios from 'axios';
import './LoginElement.scss';

import { Link } from 'react-router-dom';

const LoginElement = () => {
  const [id, setId] = useState(''); //id
  const [password, setPassword] = useState(''); //pw

  /**
   * 로그인 버튼 누르면
   * DB 검색 =>
   *  아이디 있으면
   *    수간호사인지 판별 => 수간호사 /app/headMain
   *                        일반간호사 /app/normalMain
   *  아이디 없으면
   *    alter('로그인 실패') + input 값 ''
   */
  const onClick = () => {
    alert('로그인');
  };

  return (
    <div>
      <div className="LoginElement">
        <input type="text" name="email" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button
          name="loginBtn"
          className="loginBtn"
          type="submit"
          onClick={onClick}
        >
          로그인
        </button>
        <button
          name="googleBtn"
          className="loginBtn"
          type="submit"
          onClick={onClick}
        >
          구글 로그인
        </button>
        <button
          name="naverBtn"
          className="loginBtn"
          type="submit"
          onClick={onClick}
        >
          네이버 로그인
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
  );
};

export default LoginElement;
