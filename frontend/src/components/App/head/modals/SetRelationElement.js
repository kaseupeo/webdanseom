import './SetRelationElement.scss';
import Modal from './Modal';
import { FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
const SetRelationElement = ({ modalOpen, closeModal, nurseList }) => {
  const [relations, setRelation] = useState([{ id: 0, name: '간호사1' }]);
  const rNurseList = nurseList ? (
    nurseList.map((nurse) => (
      <option key={nurse.nurseSeq} value={nurse.name}>
        {nurse.name}
      </option>
    ))
  ) : (
    <option>간호사 목록이 없습니다</option>
  );
  const relationInfo = relations.map((nurse, index) => (
    <tr className="metaInfo">
      <td>{index}</td>
      <td>
        <input type="checkBox" id={index} />
      </td>
      <td>{nurse.name}</td>
    </tr>
  ));
  return (
    <Modal
      open={modalOpen}
      close={closeModal}
      header={
        <div>
          <FaHandshake />
          관계 설정
        </div>
      }
    >
      <div className="SetRelationElement">
        <b className="title">관계 목록</b>
        <select>{rNurseList}</select>
        <table>
          <thead>
            <tr>
              <th>순번</th> <th>선택</th>
              <th>간호사</th>
            </tr>
          </thead>
          <tbody>{relationInfo}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetRelationElement;
