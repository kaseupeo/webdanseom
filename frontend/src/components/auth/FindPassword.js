/**
 * file: FindPassword.js
 * 비밀번호 찾기 레이아웃
 * 작성자: 정진욱
 */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FindPassword.scss';
import './AuthTemplate.scss';
const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  useEffect(() => {
    if (
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(
        email,
      )
    ) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [email]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/auth/login');
  };
  const onClickSuccess = () => {
    alert('이메일로 링크를 발송했습니다');
  };
  const onClickFail = () => {
    alert('발송 실패');
  };

  return (
    <div className="FindPassword">
      <b> 비밀번호 링크를 보내기위한 이메일을 입력하세요. </b>
      <input
        type="text"
        name="email"
        placeholder="nurseofduty@xxx.com"
        onChange={onEmailHandler}
      />

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
        {check ? (
          <Link
            to="/auth/findPWPost"
            type="submit"
            className="find"
            onClick={onClickSuccess}
            state={{ email: email }}
          >
            발송
          </Link>
        ) : (
          <Link
            to="/auth/findPW"
            type="submit"
            className="find"
            onClick={onClickFail}
            state={{ email: email }}
          >
            발송
          </Link>
        )}
      </div>
    </div>
  );
};

export default FindPassword;
