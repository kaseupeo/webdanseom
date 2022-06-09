import './WorkSchedule.scss';
import React, { useState, useEffect } from 'react';

const WorkSchedule = ({ year, month, dutyList }) => {
  let date = new Date(year, month, 0);

  const dutycodeList = dutyList.map((dutycode, index) => (
    <option key={index}>{dutycode.dutyCode}</option>
  ));

  let workArray = [];
  let workSumArray = [];
  for (let i = 0; i < date.getDate(); i++) workArray.push(i);

  const workSheets = workArray.map((workSheet, index) => (
    <td key={index}>
      <select>{dutycodeList}</select>
    </td>
  ));

  for (let i = 0; i < 9; i++) workSumArray.push(i);
  const workSumSheets = workSumArray.map((workSumSheet, index) => (
    <td key={index}>{0}</td>
  ));
  return (
    <>
      {workSheets}
      {workSumSheets}
    </>
  );
};

export default WorkSchedule;
