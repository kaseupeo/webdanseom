import './WorkSheet.scss';
import { useState } from 'react';
import WorkSchedule from './WorkSchedule';

const WorkSheet = ({ children, title }) => {
  const [nurses, setNurses] = useState([
    {
      name: '김한숙',

      position: '수간호사',
      proficiency: '전문가',
    },
    {
      name: '현숙',
      position: '일반',
      proficiency: '초보자',
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
    <div className="perContent">
      {nurse.name} {nurse.position} {nurse.proficiency}: {children}
    </div>
  ));

  return (
    <div className="WorkSheet">
      <div>
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
      </table>
      <div className="content">{scheduleRendering}</div>
    </div>
  );
};

export default WorkSheet;
