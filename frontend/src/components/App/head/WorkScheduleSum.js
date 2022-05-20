import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = () => {
  let dayArray = [];
  let daySumArray = 9;
  const dutyCode = ['D', 'E', 'N', 'OFF'];
  for (let i = 0; i < 31 + daySumArray; i++) dayArray.push(i);
  const days = dayArray.map((day) => <td>{0}</td>);
  const sumRow = dutyCode.map((code) => (
    <tr>
      <th>{code}</th>
      {days}
    </tr>
  ));
  return (
    <div className="WorkScheduleSum">
      <table>
        <tbody>{sumRow}</tbody>
      </table>
    </div>
  );
};

export default WorkScheduleSum;
