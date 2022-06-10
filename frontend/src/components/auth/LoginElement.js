/**
 * file: LoginTemplate.js
 * 로그인 레이아웃
 * 작성자: 정진욱
 */

import './LoginElement.scss';

import { Link } from 'react-router-dom';

const LoginElement = ({ form, onChange, onSubmit, error, loginState }) => {
  /**
   * 로그인 버튼 누르면
   * DB 검색 =>
   *  아이디 있으면
   *    수간호사인지 판별 => 수간호사 /app/headMain
   *                        일반간호사 /app/normalMain
   *  아이디 없으면
   *    alter('로그인 실패') + input 값 ''
   */

  return (
    <div>
      <div className="LoginElement">
        <form onSubmit={onSubmit}>
          <input
            autoComplete="email"
            type="text"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={form.email}
          />

          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={form.password}
            style={{ marginBottom: '30px' }}
          />
          <p>{error}</p>
          <button name="loginBtn" className="loginBtn" type="submit">
            로그인
          </button>
          <div className="socialBtn">
            <img
              className="googleBtn"
              src={`${process.env.PUBLIC_URL}/img/btn_google_square.png`}
            />
            <img
              className="naverBtn"
              src={`${process.env.PUBLIC_URL}/img/btnG_icon_square.png`}
            />
            <img
              className="kakaoBtn"
              src={`${process.env.PUBLIC_URL}/img/btn_kakao_square.png`}
            />
          </div>
        </form>

        <hr />
        <div className="otherElement">
          <Link to="/auth/findPassword" className="findPasswordBtn">
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
