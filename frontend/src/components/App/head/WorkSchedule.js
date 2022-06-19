import './WorkSchedule.scss';
import React, { useState, useEffect } from 'react';

const WorkSchedule = ({
  onChangeWork,
  nurse,
  year,
  month,
  dutyList,
  dutyTypeList,
}) => {
  let date = new Date(year, month, 0);

  const dutyCodeList = dutyList.map((dutyCode, index) => (
    <option
      key={index}
      style={{ backgroundColor: dutyCode.hexColor }}
      value={dutyCode.dutyCode}
    >
      {dutyCode.dutyCode}
    </option>
  ));

  let workArray = [];
  let workSumArray = [];
  for (let i = 0; i < date.getDate(); i++) workArray.push(i);

  const workSheets = workArray.map((workSheet, index) => (
    <td key={index}>
      <select
        name={'' + year + month + (index + 1)}
        style={{ backgroundColor: {} }}
        id={index}
        onChange={onChangeWork}
      >
        {dutyCodeList}
      </select>
    </td>
  ));

  for (let i = 0; i < dutyTypeList.length; i++) workSumArray.push(i);
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
