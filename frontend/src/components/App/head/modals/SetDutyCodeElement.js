import './SetDutyCode.scss';
import Modal from './Modal';
import { CgWorkAlt } from 'react-icons/cg';
import { useState } from 'react';
const SetDutyCodeElement = ({ modalOpen, closeModal }) => {
  const [dutyCode, setDutyCode] = useState([{}]);
  const dutyCodeInfo = dutyCode.map((nurse) => (
    <tr className="metaInfo">
      <td>{nurse.num}</td>
      <td></td>
      <td>{nurse.name}</td>
    </tr>
  ));
  return (
    <Modal
      open={modalOpen}
      close={closeModal}
      header={
        <div>
          <CgWorkAlt />
          듀티코드 설정
        </div>
      }
    >
      <div className="SetNurseElement">
        <table>
          <tr>
            <th>순번</th>
            <th>듀티코드</th>
            <th>설명</th>
            <th>시간</th>
            <th>듀티유형</th>
          </tr>
          {dutyCodeInfo}
        </table>
      </div>
    </Modal>
  );
};

export default SetDutyCodeElement;
