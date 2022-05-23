import './WorkSchedule.scss';
import React, { useState, useEffect } from 'react';

const WorkSchedule = () => {
  let date = new Date();
  // Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
  const [lastDay, setLastDay] = useState(31);
  const [dutyCodes, setDutycodes] = useState(['', 'D', 'E', 'N', 'O']);
  const dutycodeList = dutyCodes.map((dutycode) => <option>{dutycode}</option>);

  let workArray = [];
  let workSumArray = [];
  for (let i = 0; i < 31; i++) workArray.push(i);

  const workSheet = workArray.map(() => (
    <td>
      <select>{dutycodeList}</select>
    </td>
  ));

  for (let i = 0; i < 9; i++) workSumArray.push(i);
  const workSumSheet = workSumArray.map(() => <td>{0}</td>);
  return (
    <>
      {workSheet}
      {workSumSheet}
    </>
  );
};

export default WorkSchedule;
