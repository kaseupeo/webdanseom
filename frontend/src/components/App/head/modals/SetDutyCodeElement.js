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
      dutyCodeName: '데이',
      hexColor: '',
      startTime: '01:00',
      workingHours: 5,
      workType: 'daylike',
      useable: true,
    },
  ]);

  const hours = [];
  for (let i = 1; i < 25; i++) {
    hours.push(i);
  }

  const workingHoursOption = hours.map((hour) => <option>{hour}</option>);
  const onChangeTime = () => {};
  const endTime = {};

  const dutyCodeInfo = dutyCodes.map((dutyCode) => (
    <tr key={dutyCode.id} className="metaInfo">
      <td>
        <input type="checkBox" />
      </td>
      <td>{dutyCode.id}</td>
      <td>
        <input type="text" defaultValue={dutyCode.dutyCode} />
      </td>
      <td>
        <input type="text" defaultValue={dutyCode.dutyCodeName} />
      </td>
      <td>
        <ColorPicker />
      </td>
      <td>
        <input
          type="time"
          defaultValue={dutyCodes.startTime}
          onChange={onChangeTime}
        />
      </td>
      <td>
        <select defaultValue={dutyCodes.workingHours}>
          {workingHoursOption}
        </select>
      </td>
      <td>
        <select defaultValue={dutyCode.workType}>
          <option>day</option>
          <option>evening</option>
          <option>night</option>
          <option>off</option>
          <option>day like</option>
          <option>evening like</option>
          <option>night like</option>
          <option>mid</option>
        </select>
      </td>
      <td>
        <input type="checkBox" defaultChecked={dutyCode.useable} />
      </td>
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
              <th className="check">선택</th>
              <th className="id">순번</th>
              <th className="dutyCode">듀티코드</th>
              <th className="dutyCodeName">설명</th>
              <th className="hexColor">색상</th>
              <th className="startTime">시간</th>
              <th className="workingHours">근무시간</th>
              <th className="workType">근무유형</th>
              <th className="useable">사용여부</th>
            </tr>
          </thead>
          <tbody>{dutyCodeInfo}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SetDutyCodeElement;
