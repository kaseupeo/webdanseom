import './SetNurseElement.scss';
import Modal from './Modal';
import { FaUserNurse } from 'react-icons/fa';
import { useState } from 'react';
import { MiniButton } from '../../common/Button';
const SetNurseElement = ({ modalOpen, closeModal, nurses }) => {
  const nurseInfo = nurses ? (
    nurses.map((nurse) => (
      <tr key={nurse.nurseSeq} className="metaInfo">
        <td>
          <input type="checkBox" defaultValue={nurse.charge} />
        </td>
        <td>{nurse.position}</td>
        <td>
          <input type={'text'} defaultValue={nurse.name} />
        </td>
        <td>
          <select defaultValue={nurse.position}>
            <option>수 간호사</option>
            <option>책임 간호사</option>
            <option>주임 간호사</option>
            <option>평 간호사</option>
            <option>신입 간호사</option>
          </select>
        </td>
        <td>
          <select>
            <option>주중근무</option>
            <option>D,E 전담</option>
            <option>N 전담</option>
            <option>없음</option>
          </select>
        </td>
        <td>
          <input type="text" defaultValue={nurse.annualLeave}></input>
        </td>
        <td>
          <input type={'text'} defaultValue={''} />
        </td>
      </tr>
    ))
  ) : (
    <tr></tr>
  );
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
        <b className="title">간호사 목록</b>
        <div className="btns">
          <MiniButton>
            <b>추가</b>
          </MiniButton>
          <MiniButton>
            <b>삭제</b>
          </MiniButton>
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>순번</th>
              <th>이름</th>
              <th>직책</th>
              <th>전담</th>
              <th>연차</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody>{nurseInfo}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetNurseElement;
