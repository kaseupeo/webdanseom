import './WorkManagementBtn.scss';
import { Button, SetButton } from '../common/Button';
import { FaUserNurse, FaHandshake } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
const WorkManagementBtn = () => {
  return (
    <div className="WorkManagementBtn">
      <div className="btn">
        <div className="top">
          <Button>
            <b>불러오기</b>
          </Button>
          <SetButton>
            <b>근무표 저장</b>
          </SetButton>
        </div>

        <div className="bottom">
          <Button>
            <b>
              <FaUserNurse />
              간호사 설정
            </b>
          </Button>
          <Button>
            <b>
              <FaHandshake />
              관계 설정
            </b>
          </Button>
          <Button>
            <b>
              <CgWorkAlt />
              근무코드 설정
            </b>
          </Button>
          <Button>
            <b>
              <AiOutlinePlusSquare />
              근무표 자동생성
            </b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkManagementBtn;
