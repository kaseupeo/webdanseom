import './WorkSchedule.scss';
import React, { useState, useEffect } from 'react';

const WorkSchedule = () => {
  let date = new Date();
  // Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
  const [lastDay, setLastDay] = useState(31);
  const [dutyCodes, setDutycodes] = useState(['D', 'E', 'N', 'O']);
  const dutycodeList = dutyCodes.map((dutycode) => <option>{dutycode}</option>);

  let workArray = [];
  for (let i = 0; i < 31; i++) workArray.push(i);

  const workSheet = workArray.map(() => <select>{dutycodeList}</select>);

  return <div className="WorkSchedule">{workSheet}</div>;
};

export default WorkSchedule;
