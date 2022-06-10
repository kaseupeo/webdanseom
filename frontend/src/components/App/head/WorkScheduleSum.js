import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = ({ year, month, dutyList, dutyTypeList }) => {
  let date = new Date(year, month, 0);
  let dayArray = [];
  let daySumArray = 5;

  for (let i = 0; i < date.getDate() + dutyTypeList.length; i++)
    dayArray.push(i);
  const days = dayArray.map((day) => <td key={day}>{0}</td>);
  const sumRow = dutyTypeList.map((dutyType, index) => (
    <tr key={index}>
      <th colSpan={3}>{dutyType}</th>
      {days}
    </tr>
  ));
  return <tbody>{sumRow}</tbody>;
};

export default WorkScheduleSum;
