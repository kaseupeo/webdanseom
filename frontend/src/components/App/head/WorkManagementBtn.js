import './WorkManagementBtn.scss';
import { Button, SetButton } from '../common/Button';
const WorkManagementBtn = () => {
  return (
    <div className="WorkManagementBtn">
      <div className="btn">
        <Button>
          <b>간호사 설정</b>
        </Button>
        <Button>
          <b>관계 설정</b>
        </Button>
        <Button>
          <b>근무코드 설정</b>
        </Button>
        <SetButton>
          <b>근무표 저장</b>
        </SetButton>
      </div>
    </div>
  );
};

export default WorkManagementBtn;
