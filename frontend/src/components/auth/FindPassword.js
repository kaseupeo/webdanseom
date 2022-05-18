/**
 * file: FindPassword.js
 * 비밀번호 찾기 레이아웃
 * 작성자: 정진욱
 */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FindPassword.scss';
import './AuthTemplate.scss';
const FindPassword = ({ form, onChange, onSubmit, error }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/auth/login');
  };

  return (
    <div className="FindPassword">
      <form onSubmit={onSubmit}>
        <b> 비밀번호 링크를 보내기위한 이메일을 입력하세요. </b>
        <input
          autoComplete="email"
          type="text"
          name="email"
          placeholder="nurseofduty@xxx.com"
          onChange={onChange}
          value={form.email}
        />
        <br />
        {error}

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

          <button type="submit" className="find" onSubmit={onSubmit}>
            발송
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindPassword;
