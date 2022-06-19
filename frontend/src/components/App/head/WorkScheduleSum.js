import { useState } from 'react';
import './WorkScheduleSum.scss';
const WorkScheduleSum = ({ year, month, dutyList, dutyTypeList, workList }) => {
  let date = new Date(year, month, 0);
  const [sumArr, setSumArr] = useState([]);
  let dayArray = [];
  const getDutyTypeFromCode = (dutyCode) => {
    if (!dutyCode) return;
    for (let i = 0; i < dutyList.length; i++) {
      if (dutyList[i].dutyCode === dutyCode) return dutyCode[i].workType;
    }
  };

  for (let i = 0; i < date.getDate() + dutyTypeList.length; i++) {
    // const dutyType = getDutyTypeFromCode(workList[i].duty);
    // console.log(dutyType);
    // switch (dutyType) {
    //   case 'Day':
    //     break;
    //   case 'Day like':
    //     break;
    //   case 'Evening':
    //     break;
    //   case 'Evening like':
    //     break;
    //   case 'Night':
    //     break;
    //   case 'Night like':
    //     break;
    //   case 'Mid':
    //     break;
    //   case 'Off':
    //     break;
    //   case 'Off like':
    //     break;
    //   default:
    //     break;
    // }
    dayArray.push(i);
  }
  const days = dayArray.map((day) => <td key={day}>{day}</td>);
  const sumRow = dutyTypeList.map((dutyType, index) => (
    <tr key={index}>
      <th colSpan={3}>{dutyType}</th>
      {days}
    </tr>
  ));
  return <tbody>{sumRow}</tbody>;
};

export default WorkScheduleSum;
