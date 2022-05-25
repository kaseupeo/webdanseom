import './SetRelationElement.scss';
import Modal from './Modal';
import { FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
const SetRelationElement = ({ modalOpen, closeModal }) => {
  const [relations, setRelation] = useState([]);
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
        <table>
          <tr></tr>
        </table>
      </div>
    </Modal>
  );
};

export default SetRelationElement;
