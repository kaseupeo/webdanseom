import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = ({ year, month }) => {
  let date = new Date(year, month, 0);
  let dayArray = [];
  let daySumArray = 9;
  const dutyCode = ['D', 'E', 'N', 'OFF'];
  for (let i = 0; i < date.getDate() + daySumArray; i++) dayArray.push(i);
  const days = dayArray.map((day) => <td>{0}</td>);
  const sumRow = dutyCode.map((code) => (
    <tr>
      <th colSpan={3}>{code}</th>
      {days}
    </tr>
  ));
  return <tbody>{sumRow}</tbody>;
};

export default WorkScheduleSum;
