/**
 * file: FindPassword.js
 * 비밀번호 찾기 레이아웃
 * 작성자: 정진욱
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindPassword.scss';
import './AuthTemplate.scss';
const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/auth/login');
  };
  const onClick = () => {
    alert('인증번호 발송');
  };

  return (
    <div className="AuthTemplate">
      <div className="login-title">비밀번호 찾기</div>
      <div className="content">
        <div className="FindPassword">
          <b> 계정을 찾기위해 이메일 또는 전화번호를 입력하세요.</b>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="이메일 또는 전화번호"
          />
          <b> 인증 번호</b>
          <input type="text" name="number" placeholder="인증 번호" />
          <hr />
          <div className="btn">
            <button
              onClick={() => {
                goBack();
              }}
              className="cancel"
            >
              취소
            </button>
            <button type="submit" className="find" onClick={onClick}>
              발송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
