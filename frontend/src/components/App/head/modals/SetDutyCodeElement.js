import './SetDutyCodeElement.scss';
import Modal from './Modal';
import { CgWorkAlt } from 'react-icons/cg';
import { useState } from 'react';
import { MiniButton } from '../../common/Button';
import ColorPicker from '../../common/ColorPicker';
const SetDutyCodeElement = ({ modalOpen, closeModal }) => {
  const [dutyCodes, setDutyCodes] = useState([
    {
      id: 1,
      dutyCode: 'D',
      name: '데이',
      color: '',
      time: '00:00:00-05:00:00',
      time2: 5,
      state: 'daylike',
    },
  ]);
  const dutyCodeInfo = dutyCodes.map((dutyCode) => (
    <tr key={dutyCode.id} className="metaInfo">
      <td>{dutyCode.dutyCode}</td>
      <td>{dutyCode.name}</td>
      <td>
        <ColorPicker />
      </td>
      <td>{dutyCode.time}</td>
      <td>{dutyCode.time2}</td>
      <td>{dutyCode.state}</td>
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
      <div className="SetDutyCodeElement">
        <b className="title"> 듀티코드 목록</b>
        <div className="btns">
          <MiniButton>추가</MiniButton>
          <MiniButton>삭제</MiniButton>
        </div>

        <table>
          <thead>
            <tr>
              <th>듀티코드</th>
              <th>설명</th>
              <th>색상</th>
              <th>시간</th>
              <th>근무시간</th>
              <th>근무유형</th>
            </tr>
          </thead>
          <tbody>{dutyCodeInfo}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetDutyCodeElement;
