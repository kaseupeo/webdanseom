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
      charge: 'D',
      annualLeave: 10,
      email: 'harry03330@hs.ac.kr',
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
      <td>
        <input type={'text'} value={nurse.name} />
      </td>
      <td>
        <select>
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
        <input type="text" value={nurse.annualLeave}></input>
      </td>
      <td>
        <input type={'text'} value={nurse.email} />
      </td>
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
        <b className="title">간호사 목록</b>
        <div className="btns">
          <button>
            <b>추가</b>
          </button>
          <button>
            <b>삭제</b>
          </button>
        </div>
        <table>
          <tr>
            <th>순번</th>
            <th>이름</th>
            <th>직책</th>
            <th>전담</th>
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
