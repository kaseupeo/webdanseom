import { IoMdArrowRoundBack } from 'react-icons/io';
import './JoinGroup.scss';
const JoinGroup = ({ onClickMenu0, onChange, onClickJoin, errorMSG }) => {
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
        <b>{errorMSG}</b>
        <div className="submitBtn" onClick={onClickJoin}>
          그룹 참여
        </div>
      </div>
    </div>
  );
};

export default JoinGroup;
