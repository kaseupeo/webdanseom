import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = ({ year, month, dutyList }) => {
  let date = new Date(year, month, 0);
  let dayArray = [];
  let daySumArray = 9;

  for (let i = 0; i < date.getDate() + daySumArray; i++) dayArray.push(i);
  const days = dayArray.map((day) => <td key={day}>{0}</td>);
  const sumRow = dutyList.map((code, index) => (
    <tr key={index}>
      <th colSpan={3}>{code.dutyCode}</th>
      {days}
    </tr>
  ));
  return <tbody>{sumRow}</tbody>;
};

export default WorkScheduleSum;
