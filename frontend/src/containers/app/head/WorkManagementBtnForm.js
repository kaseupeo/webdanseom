import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetNurseForm from './modals/SetNurseForm';
import SetDutyCodeFrom from './modals/SetDutyCodeFrom';
import SetRelationFrom from './modals/SetRelationFrom';
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
      <SetRelationFrom
        modalOpen={relationModalOpen}
        closeModal={closeRelationModal}
      />
      <SetDutyCodeFrom
        modalOpen={dutyCodeModalOpen}
        closeModal={closeDutyCodeModal}
      />
    </div>
  );
};

export default WorkManagementBtnForm;
