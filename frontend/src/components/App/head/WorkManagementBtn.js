import './WorkManagementBtn.scss';
import { useState } from 'react';
import { Button, SetButton } from '../common/Button';
import { FaUserNurse, FaHandshake } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import SetNurseElement from './modals/SetNurseElement';
const WorkManagementBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
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
          <Button onClick={openModal}>
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
      <SetNurseElement modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default WorkManagementBtn;
