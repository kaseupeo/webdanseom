import React from 'react';
import './Main.scss';
const MyComponent = () => {
  return (
    <div className="Main">
      <div className="firstDiv">
        <p>of the nurse, by the nurse, for the nurse</p>
        <h1>간호사들을 위한 근무표</h1>
        <h1>Nurse on Duty</h1>
        <ul>
          <li>
            <h2> 편안한 근무설정</h2>
            <p>편하게 근무표 자동생성</p>
          </li>
          <li>
            <h2> 근무 통계 조회</h2>
            <p>근무표 통계 조회</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
