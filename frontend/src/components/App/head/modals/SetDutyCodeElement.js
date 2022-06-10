import './SetDutyCodeElement.scss';
import Modal from './Modal';
import { CgWorkAlt } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { MiniButton } from '../../common/Button';
import ColorPicker from '../../common/ColorPicker';
import hexToRgb from '../../common/HexToRgb';
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
  onClickInit,
}) => {
  const hours = [];
  for (let i = 1; i < 25; i++) {
    hours.push(i);
  }
  const workingHoursOption = hours.map((hour) => (
    <option key={hour}>{hour}</option>
  ));

  const [startTimeTemp, setStartTimeTemp] = useState();
  const [timeTemp, setTimeTemp] = useState(0);

  const endTime = (startTime = [], time) => {
    if (startTime === null) return '~ 00:00';
    let startTimeArray = startTime.split(':');
    let hour = (
      '00' +
      ((parseInt(startTimeArray[0]) + parseInt(time)) % 24)
    ).slice(-2);

    let minute = ('00' + (parseInt(startTimeArray[1]) % 60)).slice(-2);
    return '~' + hour + ':' + minute;
  };

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
            id={index}
            type="text"
            maxLength={1}
            value={dutyCode.dutyCode}
            onChange={onChange}
          />
        </td>
        <td className="hexColor">
          <input
            name="hexColor"
            type="color"
            id={index}
            value={dutyCode.hexColor}
            onChange={onChange}
          />
        </td>
        <td className="dutyCodeName">
          <input
            name="dutyCodeName"
            type="text"
            id={index}
            value={dutyCode.dutyCodeName}
            onChange={onChange}
          />
        </td>

        <td className="startTime">
          {dutyCode.workType === 'Off' || dutyCode.workType === 'Off like' ? (
            <></>
          ) : (
            <input
              type="time"
              name="startTime"
              className="without_ampm"
              id={index}
              value={dutyCode.startTime}
              onChange={onChange}
            />
          )}
          {dutyCode.workType === 'Off' || dutyCode.workType === 'Off like'
            ? ''
            : endTime(dutyCode.startTime, dutyCode.workingHours)}
        </td>
        <td className="workingHours">
          {dutyCode.workType === 'Off' || dutyCode.workType === 'Off like' ? (
            <></>
          ) : (
            <input
              type="number"
              name="workingHours"
              min="0"
              max="24"
              step="0.5"
              id={index}
              value={dutyCode.workingHours}
              onChange={onChange}
            />
          )}
        </td>
        <td className="workType">
          <select
            name="workType"
            id={index}
            value={dutyCode.workType}
            onChange={onChange}
          >
            <option value="Day">Day</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
            <option value="Off">Off</option>
            <option value="DayEvening">DayEvening</option>
            <option value="EveningNight">EveningNight</option>
            <option value="Day like">Day like</option>
            <option value="Evening like">Evening like</option>
            <option value="Night like">Night like</option>
            <option value="Off like">Off like</option>
            <option value="Mid">Mid</option>
          </select>
        </td>
        <td className="usable">
          <input
            name="isUsable"
            type="checkBox"
            id={index}
            defaultChecked={dutyCode.isUsable}
            defaultValue={dutyCode.isUsable}
            onChange={onChange}
          />
        </td>
        <td className="creator">
          <select
            name="creator"
            id={index}
            value={dutyCode.creator}
            onChange={onChange}
          >
            <option>시스템</option>
            <option>기본</option>
            <option>사용자 정의</option>
          </select>
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
          <MiniButton onClick={onClickInit} style={{ marginRight: '3rem' }}>
            초기화
          </MiniButton>
          <MiniButton onClick={() => onClickInsert()}>추가</MiniButton>
          <MiniButton onClick={() => onClickDelete()}>삭제</MiniButton>
        </div>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th className="check">
                  <div>선택</div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkBoxAll"
                      onClick={onCheckedAll}
                    />
                  </div>
                </th>
                <th className="id">순번</th>
                <th className="dutyCode">듀티코드</th>
                <th className="hexColor">색상</th>
                <th className="dutyCodeName">설명</th>
                <th className="startTime">시간</th>
                <th className="workingHours">근무시간</th>
                <th className="workType">근무유형</th>
                <th className="usable">사용 여부</th>
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
