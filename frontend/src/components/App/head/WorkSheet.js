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
  const [lastDay, setLastDay] = useState(31);
  let dayArray = [];
  for (let i = 0; i < 31; i++) dayArray.push(i);
  const days = dayArray.map((day) => day);
  const scheduleRendering = nurses.map((nurse) => (
    <div className="perContent">
      {nurse.name} {nurse.position} {nurse.proficiency}: {children}
    </div>
  ));

  return (
    <div className="WorkSheet">
      <h2>{title}</h2>
      <div className="title"></div>
      <div>
        <span>이름 직책 숙련도 {days}</span>
      </div>
      <div className="content">{scheduleRendering}</div>
      <button>간호사 추가+</button>
    </div>
  );
};

export default WorkSheet;
