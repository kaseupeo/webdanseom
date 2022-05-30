import './SetRelationElement.scss';
import Modal from './Modal';
import { FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
const SetRelationElement = ({ modalOpen, closeModal }) => {
  const [relations, setRelation] = useState([{ id: 0, name: '간호사1' }]);
  const relationInfo = relations.map((nurse) => (
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
          <FaHandshake />
          관계 설정
        </div>
      }
    >
      <div className="SetRelationElement">
        <b className="title">관계 목록</b>
        <select>
          <option></option>
        </select>
        <table>
          <thead>
            <tr>
              <th>순번</th> <th>선택</th>
              <th>간호사</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetRelationElement;
