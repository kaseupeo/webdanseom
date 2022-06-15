import './WorkSheet.scss';
import { useState, cloneElement } from 'react';
import WorkSchedule from './WorkSchedule';

const WorkSheet = ({
  children,
  year,
  month,
  onClickMonthPlus,
  onClickMonthMinus,
  nurseList,
  dutyTypeList,
}) => {
  let date = new Date(year, month, 0);
  //근무일정

  let dayArray = [];
  for (let i = 0; i < date.getDate(); i++) dayArray.push(i);
  const days = dayArray.map((day) => (
    <th key={day} className="workDays">
      {day + 1}
    </th>
  ));

  //간호사
  const scheduleRendering = nurseList.map((nurse, index) => (
    <tr key={index} className="metaInfo">
      <td>{index + 1}</td>
      <td> {nurse.position}</td>
      <td>{nurse.name}</td>
      {cloneElement(children[1], {
        nurse: nurse,
      })}
    </tr>
  ));
  //합계
  const dutyTypeListRendering = dutyTypeList.map((dutyType, index) => (
    <th key={index}>{dutyType}</th>
  ));

  return (
    <div className="WorkSheet">
      <div className="contentDiv">
        <div className="sheetTop">
          <div className="month">
            <button className="monthBtn" onClick={onClickMonthMinus}>
              &lt;
            </button>

            <div className="monthStr">
              <b>{year + '.' + month.toString().padStart(2, '0')}</b>
            </div>
            <button className="monthBtn" onClick={onClickMonthPlus}>
              &gt;
            </button>
          </div>
          <div className="settingBtn">{children[0]}</div>
        </div>
        <div className="scrollTable">
          <table className="tableColumn">
            <thead>
              <tr>
                <th colSpan={'3'}>간호사 정보</th>
                <th colSpan={date.getDate()}>근무일</th>
                <th colSpan={dutyTypeListRendering.length}>합계</th>
              </tr>

              <tr>
                <th>순번</th>
                <th>직책</th>
                <th>이름</th>

                {days}

                {dutyTypeListRendering}
              </tr>
            </thead>
            <tbody>{scheduleRendering}</tbody>

            {children[2]}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
