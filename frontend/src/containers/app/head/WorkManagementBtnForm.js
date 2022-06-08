import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetNurseForm from './modals/SetNurseForm';
import SetDutyCodeFrom from './modals/SetDutyCodeForm';
import SetRelationFrom from './modals/SetRelationForm';
import { selectNurses } from '../../../modules/nurse';
import { selectDutyCode } from '../../../modules/dutyCode';
const WorkManagementBtnForm = () => {
  const dispatch = useDispatch();
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [relationModalOpen, setRelationModalOpen] = useState(false);
  const [dutyCodeModalOpen, setDutyCodeModalOpen] = useState(false);
  const openNurseModal = () => {
    setNurseModalOpen(true);
    dispatch(selectNurses({ groupSeq }));
  };
  const closeNurseModal = () => {
    setNurseModalOpen(false);
    dispatch(selectNurses({ groupSeq }));
  };

  const openRelationModal = () => {
    setRelationModalOpen(true);
  };
  const closeRelationModal = () => {
    setRelationModalOpen(false);
  };

  const openDutyCodeModal = () => {
    setDutyCodeModalOpen(true);
    dispatch(selectDutyCode({ groupSeq }));
  };
  const closeDutyCodeModal = () => {
    setDutyCodeModalOpen(false);
    dispatch(selectDutyCode({ groupSeq }));
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
