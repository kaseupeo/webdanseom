import './WorkSheet.scss';
import { useState } from 'react';
import WorkSchedule from './WorkSchedule';

const WorkSheet = ({ children }) => {
  const [nurses, setNurses] = useState([
    {
      num: 1,
      position: '수간호사',
      name: '김한숙',
    },
    {
      num: 2,
      position: '일반',
      name: '이영희',
    },
    {
      num: 3,
      position: '일반',
      name: '김진숙',
    },
  ]);

  let date = new Date();
  //   Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
  const [month, setMonth] = useState('2022.05');
  const [lastDay, setLastDay] = useState(31);
  let dayArray = [];
  for (let i = 0; i < 31; i++) dayArray.push(i);
  const days = dayArray.map((day) => <th className="workDays">{day + 1}</th>);
  const scheduleRendering = nurses.map((nurse) => (
    <tr>
      <td>{nurse.num}</td>
      <td> {nurse.position}</td>
      <td>{nurse.name}</td>
      {children[1]}
    </tr>
  ));

  return (
    <div className="WorkSheet">
      <div className="sheetTop">
        <button className="monthBtn">&lt;</button>
        <b
          style={{
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          {month}
        </b>
        <button className="monthBtn">&gt;</button>
        {children[0]}
      </div>

      <table className="tableColumn">
        <thead>
          <tr>
            <th colSpan={'3'}>간호사 정보</th>
            <th colSpan={'31'}>근무일</th>
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
  );
};

export default WorkSheet;
