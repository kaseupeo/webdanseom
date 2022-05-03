import React from 'react';
import './FindPassword.scss';
import './AuthTemplate.scss';
const FindPassword = () => {
  const goBack = () => {};

  return (
    <div className="AuthTemplate">
      <div className="login-title">비밀번호 찾기</div>
      <div className="content">
        <div className="FindPassword">
          <b> 계정을 찾기위해 이메일 또는 전화번호를 입력하세요.</b>
          <input type="text" placeholder="이메일 또는 전화번호" />
          <hr />
          <div className="btn">
            <button onClick={goBack} className="cancel">
              취소
            </button>
            <button type="submit" className="find">
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
