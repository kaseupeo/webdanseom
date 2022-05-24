import './SetNurseElement.scss';
import Modal from './Modal';
import { FaUserNurse } from 'react-icons/fa';
import { useState } from 'react';
const SetNurseElement = ({ modalOpen, closeModal }) => {
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
      <table>
        <tr>
          <th>간호사</th>
        </tr>
      </table>
    </Modal>
  );
};

export default SetNurseElement;
