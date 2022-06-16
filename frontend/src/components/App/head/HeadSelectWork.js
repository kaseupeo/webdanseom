/**
 * file: HeadMain.js
 * 수 간호사 조회메뉴
 * 작성자: 정진욱
 */
import React from 'react';
import Calendar from '../common/Calendar';

const HeadSelectWork = ({ nurseList }) => {
  return (
    <div>
      <Calendar nurseList={nurseList} />
    </div>
  );
};

export default HeadSelectWork;
