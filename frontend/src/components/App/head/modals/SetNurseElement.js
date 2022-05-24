import './SetNurseElement.scss';
import Modal from './Modal';
import { FaUserNurse } from 'react-icons/fa';
import { useState } from 'react';
const SetNurseElement = ({ modalOpen, closeModal }) => {
  const [nurses, setNurses] = useState([
    {
      num: 1,
      name: '김한숙',
      position: '수간호사',
    },
    {
      num: 2,
      name: '이영희',
      position: '일반',
    },
    {
      num: 3,
      name: '김진숙',
      position: '일반',
    },
  ]);
  const nurseInfo = nurses.map((nurse) => (
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
          <FaUserNurse />
          간호사 설정
        </div>
      }
    >
      <div className="SetNurseElement">
        <table>
          <tr>
            <th>순번</th>
            <th>이름</th>
            <th>직책</th>
            <th>연차</th>
            <th>이메일</th>
          </tr>
          {nurseInfo}
        </table>
      </div>
    </Modal>
  );
};

export default SetNurseElement;
