/**
 * file: SignUpTemplate.js
 * 회원가입 레이아웃
 * 작성자: 정진욱
 */
import React, { useEffect, useState } from 'react';
import './SignUpElement.scss';
import './AuthTemplate.scss';
import { Link } from 'react-router-dom';
const SignUpElement = ({ form, onChange, onSubmit }) => {
  const [check, setCheck] = useState({
    emailCheck: true,
    pwCheck: true,
    confirmPwcheck: true,
  });

  //이메일 정규식 체크
  useEffect(() => {
    if (
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(
        form.email,
      )
    ) {
      setCheck({ ...check, emailCheck: true });
    } else {
      setCheck({ ...check, emailCheck: false });
    }
  }, [form.email]);

  // 비밀번호 정규식 체크 -> 고쳐야됨
  useEffect(() => {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
        form.password,
      )
    ) {
      setCheck({ ...check, pwCheck: true });
    } else {
      setCheck({ ...check, pwCheck: false });
    }
  }, [form.password]);

  // 비밀번호 확인 체크
  useEffect(() => {
    if (form.passwordConfirm === '' || form.passwordConfirm === form.password)
      setCheck({ ...check, confirmPwcheck: true });
    else setCheck({ ...check, confirmPwcheck: false });
  }, [form.password, form.passwordConfirm]);

  const onClickFail = () => {
    alert('회원정보를 확인해주세요!');
  };
  const onClickRegister = () => {
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="content">
          <div className="SignUpElement">
            <b>이메일</b>
            <b style={{ color: 'red' }}> *</b>
            <b className="check">
              {check.emailCheck ? '' : '정확한 이메일을 입력해주세요'}
            </b>
            <input
              autoComplete="email"
              name="email"
              type="text"
              placeholder="nurseofduty@xxx.com"
              onChange={onChange}
              value={form.email}
            />
            <b>비밀번호</b>
            <b style={{ color: 'red' }}> *</b>
            <b className="check">
              {check.pwCheck
                ? ''
                : '영문, 특수문자, 숫자를 포함한 8자 이상이어야 합니다'}
            </b>
            <input
              autoComplete="new-password"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChange}
              value={form.password}
            />
            <input
              autoComplete="new-password"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 재확인"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <b className="check">
              {check.confirmPwcheck ? '' : '비밀번호가 같지 않습니다'}
            </b>
            <br></br>
            <br></br>
            <b>이름</b> <b style={{ color: 'red' }}> *</b>
            <input
              name="userName"
              type="text"
              placeholder="이름"
              onChange={onChange}
              value={form.userName}
            />
            <b>전화번호</b>
            <input
              type="text"
              name="phone"
              placeholder="ex) 01000000000"
              onChange={onChange}
              value={form.phone}
            />
            {check.emailCheck && check.pwCheck && check.confirmPwcheck ? (
              <Link to="/auth/signup" className="signBtn" onClick={onsubmit}>
                가입하기
              </Link>
            ) : (
              <Link to="/auth/login" className="signBtn" onClick={onsubmit}>
                가입하기
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpElement;
