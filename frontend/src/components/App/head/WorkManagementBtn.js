import './WorkManagementBtn.scss';
import { useState } from 'react';
import { Button, SetButton } from '../common/Button';
import { FaUserNurse, FaHandshake } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const WorkManagementBtn = ({
  openNurseModal,
  openRelationModal,
  openDutyCodeModal,
  onClickWorkExtraBtn,
  onClickWorkBtn,
}) => {
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
          <Button onClick={onClickWorkExtraBtn}>
            <b>임시 저장</b>
          </Button>
          <SetButton onClick={onClickWorkBtn}>
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
    </div>
  );
};

export default WorkManagementBtn;
