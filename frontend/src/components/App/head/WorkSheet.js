import './WorkSheet.scss';
import { useState } from 'react';

const WorkSheet = ({
  children,
  year,
  month,
  onClickMonthPlus,
  onClickMonthMinus,
  nurses,
}) => {
  let date = new Date(year, month, 0);

  let dayArray = [];
  for (let i = 0; i < date.getDate(); i++) dayArray.push(i);
  const days = dayArray.map((day) => (
    <th key={day} className="workDays">
      {day + 1}
    </th>
  ));

  const scheduleRendering = nurses.map((nurse, index) => (
    <tr key={index} className="metaInfo">
      <td>{index + 1}</td>
      <td> {nurse.position}</td>
      <td>{nurse.name}</td>
      {children[1]}
    </tr>
  ));

  return (
    <div className="WorkSheet">
      <div className="sheetTop">
        <div className="month">
          <button className="monthBtn" onClick={onClickMonthMinus}>
            &lt;
          </button>

          <b className="monthStr">
            {year + '.' + month.toString().padStart(2, '0')}
          </b>
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
              <th colSpan={'9'}>합계</th>
            </tr>

            <tr>
              <th>순번</th>
              <th>직책</th>
              <th>이름</th>

              {days}

              <th>D</th>
              <th>E</th>
              <th>N</th>
              <th>OFF</th>
              <th>연차</th>
              <th>반차</th>
              <th>공가</th>
              <th>당일OFF</th>
              <th>누적OFF</th>
            </tr>
          </thead>
          <tbody>{scheduleRendering}</tbody>
          {children[2]}
        </table>
      </div>
    </div>
  );
};

export default WorkSheet;
