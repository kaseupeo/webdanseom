/**
 * file: SignUpTemplate.js
 * 회원가입 레이아웃
 * 작성자: 정진욱
 */
import React from 'react';
import './SignUpElement.scss';
import './AuthTemplate.scss';
import { Link } from 'react-router-dom';
const JoinElement = () => {
  /**
   *
   *  회원 가입 버튼 처리
   *  이메일 중복 검사 => DB
   *  비밀번호 처리(비밀번호 format, 비밀번호 재확인 일치)
   *  전화번호 검사 => DB?
   *  카카오 네이버 api 사용
   *
   */
  const onClick = () => {
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="AuthTemplate">
      <div className="login-title">회원가입</div>

      <div className="content">
        <div className="SignUpElement">
          <b>
            이메일
            <input type="text" placeholder="이메일" />
          </b>
          <b>비밀번호</b>
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 재확인" />
          <b>이름</b>
          <input type="text" placeholder="이름" />
          <b>전화번호</b>
          <input type="text" placeholder="ex) 010-0000-0000" />
          <Link to="/" className="signBtn">
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinElement;
