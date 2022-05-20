/**
 * file: FindPassword.js
 * 비밀번호 찾기 레이아웃
 * 작성자: 정진욱
 */

import { useNavigate } from 'react-router-dom';
import './FindPassword.scss';
const FindPassword = ({ form, onChange, onSubmit, error }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/auth/login');
  };

  return (
    <div className="FindPassword">
      <form onSubmit={onSubmit}>
        <b> 비밀번호 변경 링크를 보내기 위한 이메일을 입력하세요. </b>
        <input
          autoComplete="email"
          type="text"
          name="email"
          placeholder="nurseonduty@xxx.com"
          onChange={onChange}
          value={form.email}
        />

        <p>{error}</p>

        <hr />

        <div className="btn">
          <button
            onClick={() => {
              goBack();
            }}
            className="cancel"
            type="reset"
          >
            취소
          </button>

          <button type="submit" className="find">
            발송
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindPassword;
