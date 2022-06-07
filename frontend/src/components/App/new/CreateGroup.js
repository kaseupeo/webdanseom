import { IoMdArrowRoundBack } from 'react-icons/io';
import './CreateGroup.scss';
const CreateGroup = ({ onClickMenu0, onChange, onClickCreate }) => {
  return (
    <div className="CreateGroup">
      <div className="backBtn" onClick={onClickMenu0}>
        <IoMdArrowRoundBack className="icon" />
      </div>

      <div className="content">
        <b className="title">그룹명</b>
        <input
          type="text"
          placeholder="그룹명을 입력해주세요."
          onChange={onChange}
        />
        <button className="submitBtn" onClick={onClickCreate}>
          그룹 생성
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;
