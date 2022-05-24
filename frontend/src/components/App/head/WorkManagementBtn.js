import './WorkManagementBtn.scss';
import { useState } from 'react';
import { Button, SetButton } from '../common/Button';
import { FaUserNurse, FaHandshake } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import SetNurseElement from './modals/SetNurseElement';
import SetDutyCodeElement from './modals/SetDutyCodeElement';
import SetRelationElement from './modals/SetRelationElement';
const WorkManagementBtn = () => {
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [relationModalOpen, setRelationModalOpen] = useState(false);
  const [dutyCodeModalOpen, setDutyCodeModalOpen] = useState(false);
  const openNurseModal = () => {
    setNurseModalOpen(true);
  };
  const closeNurseModal = () => {
    setNurseModalOpen(false);
  };

  const openRelationModal = () => {
    setRelationModalOpen(true);
  };
  const closeRelationModal = () => {
    setRelationModalOpen(false);
  };

  const openDutyCodeModal = () => {
    setDutyCodeModalOpen(true);
  };
  const closeDutyCodeModal = () => {
    setDutyCodeModalOpen(false);
  };
  return (
    <div className="WorkManagementBtn">
      <div className="btn">
        <div className="top">
          <Button>
            <b>근무표 불러오기</b>
          </Button>
          <Button>
            <b>근무표 출력</b>
          </Button>
          <Button>
            <b>임시 저장</b>
          </Button>
          <SetButton>
            <b>근무표 저장</b>
          </SetButton>
        </div>

        <div className="bottom">
          <Button onClick={openNurseModal}>
            <b>
              <FaUserNurse />
              간호사 설정
            </b>
          </Button>

          <Button onClick={openRelationModal}>
            <b>
              <FaHandshake />
              관계 설정
            </b>
          </Button>
          <Button onClick={openDutyCodeModal}>
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
      <SetNurseElement
        modalOpen={nurseModalOpen}
        closeModal={closeNurseModal}
      />
      <SetRelationElement
        modalOpen={relationModalOpen}
        closeModal={closeRelationModal}
      />
      <SetDutyCodeElement
        modalOpen={dutyCodeModalOpen}
        closeModal={closeDutyCodeModal}
      />
    </div>
  );
};

export default WorkManagementBtn;
