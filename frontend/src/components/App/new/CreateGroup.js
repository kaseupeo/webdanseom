import { IoMdArrowRoundBack } from 'react-icons/io';
import './CreateGroup.scss';
const CreateGroup = ({ onClickMenu0, onChange, onSubmit }) => {
  return (
    <div className="CreateGroup">
      <div className="backBtn" onClick={onClickMenu0}>
        <IoMdArrowRoundBack className="icon" />
      </div>
      <form className="content" onSubmit={onSubmit}>
        <b className="title">그룹명</b>
        <input
          type="text"
          placeholder="그룹명을 입력해주세요."
          onChange={onChange}
        />
        <button className="submitBtn" type="submit">
          그룹 생성
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
