/**
 * file: SignUpTemplate.js
 * 회원가입 레이아웃
 * 작성자: 정진욱
 */

import './SignUpElement.scss';
import './AuthTemplate.scss';

const SignUpElement = ({ form, onChange, onSubmit, error, auth }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="content">
          <div className="SignUpElement">
            <b>이메일</b>
            <b style={{ color: 'red' }}> *</b>
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
            <b>이름</b> <b style={{ color: 'red' }}> *</b>
            <input
              name="name"
              autoComplete="name"
              type="text"
              placeholder="이름"
              onChange={onChange}
              value={form.userName}
            />
            <b>전화번호</b>
            <input
              type="text"
              name="phoneNumber"
              autoComplete="phoneNumber"
              placeholder="ex) 01000000000"
              onChange={onChange}
              value={form.phone}
            />
            <br></br>
            <b className="check">{error}</b>
            <button className="signBtn" onClick={onsubmit}>
              가입하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpElement;
