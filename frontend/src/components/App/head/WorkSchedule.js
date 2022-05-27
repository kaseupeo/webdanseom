import './WorkSchedule.scss';
import React, { useState, useEffect } from 'react';

const WorkSchedule = ({ year, month }) => {
  let date = new Date(year, month, 0);

  const [lastDay, setLastDay] = useState(31);
  const [dutyCodes, setDutycodes] = useState(['', 'D', 'E', 'N', 'O']);
  const dutycodeList = dutyCodes.map((dutycode) => (
    <option key={dutycode}>{dutycode}</option>
  ));

  let workArray = [];
  let workSumArray = [];
  for (let i = 0; i < date.getDate(); i++) workArray.push(i);

  const workSheets = workArray.map((workSheet) => (
    <td key={workSheet}>
      <select>{dutycodeList}</select>
    </td>
  ));

  for (let i = 0; i < 9; i++) workSumArray.push(i);
  const workSumSheets = workSumArray.map((workSumSheet) => (
    <td key={workSumSheet}>{0}</td>
  ));
  return (
    <>
      {workSheets}
      {workSumSheets}
    </>
  );
};

export default WorkSchedule;
