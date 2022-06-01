import { IoMdArrowRoundBack } from 'react-icons/io';
import './JoinGroup.scss';
const JoinGroup = () => {
  return (
    <div className="JoinGroup">
      <div className="backBtn">
        <IoMdArrowRoundBack className="icon" />
      </div>

      <div className="content">
        <b className="title">그룹 코드</b>
        <input type="text" placeholder="그룹 코드를 입력해주세요." />
      </div>

      <div className="submitBtn">그룹 참가</div>
    </div>
  );
};

export default JoinGroup;
