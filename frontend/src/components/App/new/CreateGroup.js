import { IoMdArrowRoundBack } from 'react-icons/io';
import './CreateGroup.scss';
const CreateGroup = () => {
  return (
    <div className="CreateGroup">
      <div className="backBtn">
        <IoMdArrowRoundBack className="icon" />
      </div>

      <div className="content">
        <b className="title">그룹명</b>
        <input type="text" placeholder="그룹명을 입력해주세요." />
      </div>

      <div className="submitBtn">그룹 생성</div>
    </div>
  );
};

export default CreateGroup;
