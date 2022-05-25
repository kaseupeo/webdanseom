import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetNurseForm from './modals/SetNurseForm';
import SetDutyCodeElement from '../../../components/app/head/modals/SetDutyCodeElement';
import SetRelationElement from '../../../components/app/head/modals/SetRelationElement';
const WorkManagementBtnForm = () => {
  const dispatch = useDispatch();
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
    <div>
      <WorkManagementBtn
        openNurseModal={openNurseModal}
        openRelationModal={openRelationModal}
        openDutyCodeModal={openDutyCodeModal}
      ></WorkManagementBtn>
      <SetNurseForm modalOpen={nurseModalOpen} closeModal={closeNurseModal} />
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

export default WorkManagementBtnForm;
