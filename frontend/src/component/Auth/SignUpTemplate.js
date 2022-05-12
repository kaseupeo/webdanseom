/**
 * file: SignUpTemplate.js
 * 회원가입 레이아웃
 * 작성자: 정진욱
 */
import React, { useEffect, useState } from 'react';
import './SignUpElement.scss';
import './AuthTemplate.scss';
import { Link } from 'react-router-dom';
const JoinElement = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState({
    emailCheck: false,
    pwCheck: false,
    confirmPwcheck: false,
    nameCheck: false,
    emailInit: false,
    pwInit: false,
    confirmPwInit: false,
  });

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };

  useEffect(() => {
    if (
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(
        email,
      ) ||
      email === ''
    ) {
      if (email === '') setCheck({ ...check, emailCheck: false });
      else setCheck({ ...check, emailCheck: true });
    } else {
      setCheck({ ...check, emailCheck: false });
    }
  }, [email]);

  useEffect(() => {
    if (password === '') {
      setCheck({ ...check, pwCheck: false });
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password,
      )
    ) {
      setCheck({ ...check, pwCheck: false });
    } else {
      setCheck({ ...check, pwCheck: true });
    }
  }, [password]);

  useEffect(() => {
    if (confirmPw === '' || confirmPw === password) {
      if (confirmPw === '') setCheck({ ...check, confirmPwcheck: false });
      else setCheck({ ...check, confirmPwcheck: true });
    } else {
      setCheck({ ...check, confirmPwcheck: false });
    }
  }, [confirmPw]);

  useEffect(() => {
    if (name === '') setCheck({ ...check, nameCheck: false });
    else setCheck({ ...check, nameCheck: true });
  }, [name]);

  const onChangeEmail = () => {
    setCheck({ ...check, emailInit: true });
  };
  const onChangePw = () => {
    setCheck({ ...check, pwInit: true });
  };
  const onChangeConfirmPw = () => {
    setCheck({ ...check, confirmPwInit: true });
  };
  /**
   *
   *  회원 가입 버튼 처리
   *  이메일 중복 검사 => DB
   *  비밀번호 처리(비밀번호 format, 비밀번호 재확인 일치)
   *  전화번호 검사 => DB?
   *  카카오 네이버 api 사용
   *
   */
  const onClickFail = () => {
    alert('회원정보를 확인해주세요!');
  };
  const onClickRegister = () => {
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="AuthTemplate">
      <div className="title">회원가입</div>

      <div className="content">
        <div className="SignUpElement">
          <b>이메일</b>
          <b style={{ color: 'red' }}> *</b>
          <b className="check">
            {' '}
            {check.emailCheck || !check.emailInit
              ? ''
              : '정확한 이메일을 입력해주세요'}
          </b>
          <input
            name="email"
            type="text"
            placeholder="nurseofduty@xxx.com"
            onChange={(e) => {
              onEmailHandler(e);
              onChangeEmail();
            }}
          />
          <b>비밀번호</b>
          <b style={{ color: 'red' }}> *</b>
          <b className="check">
            {check.pwCheck || !check.pwInit
              ? ''
              : '영문, 특수문자, 숫자를 포함한 8자 이상이어야 합니다'}
          </b>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              onPasswordHandler(e);
              onChangePw();
            }}
          />
          <input
            name="confirmPw"
            type="password"
            placeholder="비밀번호 재확인"
            onChange={(e) => {
              onConfirmPwHandler(e);
              onChangeConfirmPw();
            }}
          />
          <b className="check">
            {check.confirmPwcheck || !check.confirmPwInit
              ? ''
              : '비밀번호가 같지 않습니다'}
          </b>
          <br></br>
          <br></br>
          <b>이름</b> <b style={{ color: 'red' }}> *</b>
          <input
            name="name"
            type="text"
            placeholder="이름"
            onChange={(e) => {
              onNameHandler(e);
            }}
          />
          <b>전화번호</b>
          <input
            type="text"
            placeholder="ex) 01000000000"
            onChange={(e) => {
              onPhoneHandler(e);
            }}
          />
          {check.emailCheck &&
          check.pwCheck &&
          check.confirmPwcheck &&
          check.nameCheck ? (
            <Link
              to="/auth/login"
              className="signBtn"
              onClick={onClickRegister}
            >
              가입하기
            </Link>
          ) : (
            <Link to="/auth/signup" className="signBtn" onClick={onClickFail}>
              가입하기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinElement;
