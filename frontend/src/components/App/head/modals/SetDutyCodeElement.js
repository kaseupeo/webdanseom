import './SetDutyCodeElement.scss';
import Modal from './Modal';
import { CgWorkAlt } from 'react-icons/cg';
import { useState } from 'react';
import { MiniButton } from '../../common/Button';
import ColorPicker from '../../common/ColorPicker';
const SetDutyCodeElement = ({
  modalOpen,
  closeModal,
  onClickInsert,
  onClickDelete,
  onClickUpdate,
  onChecked,
  onCheckedAll,
  onChange,
  dutyCodeList,
}) => {
  const hours = [];
  for (let i = 1; i < 25; i++) {
    hours.push(i);
  }

  const workingHoursOption = hours.map((hour) => (
    <option key={hour}>{hour}</option>
  ));
  const onChangeTime = () => {};
  const [endTime, setEndTime] = useState('00:00');

  const dutyCodeInfo = dutyCodeList ? (
    dutyCodeList.map((dutyCode, index) => (
      <tr key={index} className="metaInfo">
        <td className="check">
          <input
            type="checkBox"
            id={index}
            className="checkBox"
            onClick={onChecked}
            defaultChecked={false}
          />
        </td>
        <td className="id">{index + 1}</td>
        <td className="dutyCode">
          <input
            name="dutyCode"
            type="text"
            maxLength={1}
            defaultValue={dutyCode.dutyCode}
          />
        </td>
        <td className="hexColor">
          <ColorPicker />
        </td>
        <td className="dutyCodeName">
          <input
            name="dutyCodeName"
            type="text"
            defaultValue={dutyCode.dutyCodeName}
          />
        </td>

        <td className="startTime">
          <input
            type="time"
            name="startTime"
            defaultValue={dutyCode.startTime}
            onChange={onChangeTime}
          />
          ~ {endTime}
        </td>
        <td className="workingHours">
          <select name="workingHours" defaultValue={dutyCode.workingHours}>
            {workingHoursOption}
          </select>
        </td>
        <td className="workType">
          <select name="workType" defaultValue={dutyCode.workType}>
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
        <td className="useable">
          <input
            name="useable"
            type="checkBox"
            defaultChecked={dutyCode.useable}
          />
        </td>
        <td className="creator">
          <input name="creator" type="text" defaultValue={dutyCode.creator} />
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
          <CgWorkAlt />
          듀티코드 설정
        </div>
      }
      onClickUpdate={onClickUpdate}
    >
      <div className="SetDutyCodeElement">
        <b className="title"> 듀티코드 목록</b>
        <div className="btns">
          <MiniButton onClick={onClickInsert}>추가</MiniButton>
          <MiniButton onClick={onClickDelete}>삭제</MiniButton>
        </div>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th className="check">선택</th>
                <th className="id">순번</th>
                <th className="dutyCode">듀티코드</th>
                <th className="hexColor">색상</th>
                <th className="dutyCodeName">설명</th>
                <th className="startTime">시간</th>
                <th className="workingHours">근무시간</th>
                <th className="workType">근무유형</th>
                <th className="useable">사용 여부</th>
                <th className="creator">구분</th>
              </tr>
            </thead>
            <tbody>{dutyCodeInfo}</tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default SetDutyCodeElement;
