import { IoMdArrowRoundBack } from 'react-icons/io';
import './JoinGroup.scss';
const JoinGroup = ({ onClickMenu0, onChange, onClickJoin }) => {
  return (
    <div className="JoinGroup">
      <div className="backBtn" onClick={onClickMenu0}>
        <IoMdArrowRoundBack className="icon" />
      </div>

      <div className="content">
        <b className="title">그룹 코드</b>
        <input
          type="text"
          placeholder="그룹 코드를 입력해주세요."
          onChange={onChange}
        />
      </div>

      <div className="submitBtn" onClick={onClickJoin}>
        그룹 참가
      </div>
    </div>
  );
};

export default JoinGroup;
