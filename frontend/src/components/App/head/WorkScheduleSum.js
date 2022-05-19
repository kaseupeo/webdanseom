import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = () => {
  let dayArray = [];
  let daySumArray = 9;
  for (let i = 0; i < 31 + daySumArray; i++) dayArray.push(i);
  const days = dayArray.map((day) => (
    <tr>
      <td>{0}</td>
      <td>{0}</td>
      <td>{0}</td>
      <td>{0}</td>
    </tr>
  ));
  return (
    <div className="WorkScheduleSum">
      <table>
        <tr>
          <th>D</th>
          <th>E</th>
          <th>N</th>
          <th>off</th>
        </tr>

        {days}
      </table>
    </div>
  );
};

export default WorkScheduleSum;
