import './SetNurseElement.scss';
import Modal from './Modal';
import { FaUserNurse } from 'react-icons/fa';
import { useState } from 'react';
import { MiniButton } from '../../common/Button';
const SetNurseElement = ({
  modalOpen,
  closeModal,
  onChange,
  nurseList,
  onClickInsert,
  onClickDelete,
  onClickUpdate,
  onChecked,
}) => {
  const nurseInfo = nurseList ? (
    nurseList.map((nurse, index) => (
      <tr key={index} className="metaInfo">
        <td className="num">{index}</td>
        <td className="check">
          <input type="checkBox" id={index} onClick={onChecked} />
        </td>

        <td>
          <input
            name="name"
            type={'text'}
            onChange={onChange}
            defaultValue={nurse.name}
            id={index}
          />
        </td>
        <td>
          <select
            name="position"
            onChange={onChange}
            defaultValue={nurse.position}
            id={index}
          >
            <option value="수간호사">수간호사</option>
            <option value="책임간호사">책임간호사</option>
            <option value="주임간호사">주임간호사</option>
            <option value="일반간호사">일반간호사</option>
            <option value="신입간호사">신입간호사</option>
          </select>
        </td>
        <td>
          <select
            name="charge"
            onChange={onChange}
            defaultValue={nurse.charge}
            id={index}
          >
            <option value="없음">없음</option>
            <option value="주중근무">주중근무</option>
            <option value="D,E전담">D,E전담</option>
            <option value="N전담">N전담</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            name="annualLeave"
            onChange={onChange}
            defaultValue={nurse.annualLeave}
            id={index}
          ></input>
        </td>
        <td>
          <input type={'text'} defaultValue={''} id={index} />
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
      onClickUpdate={onClickUpdate}
    >
      <div className="SetNurseElement">
        <b className="title">간호사 목록</b>
        <div className="btns">
          <MiniButton onClick={onClickInsert}>
            <b>추가</b>
          </MiniButton>
          <MiniButton onClick={onClickDelete}>
            <b>삭제</b>
          </MiniButton>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="id">순번</th>
              <th className="check">선택</th>
              <th className="name">이름</th>
              <th className="position">직책</th>
              <th className="charge">전담</th>
              <th className="annualLeave">연차</th>
              <th className="email">이메일</th>
            </tr>
          </thead>
          <tbody>{nurseInfo}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetNurseElement;
