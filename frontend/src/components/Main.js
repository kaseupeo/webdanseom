/**
 * file: Main.js
 * 메인메뉴
 * 작성자: 정진욱
 */

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
            <h2> 편리한 근무표 작성</h2>
            <p>근무표 자동생성으로 손쉽게 근무표를 작성해보세요!</p>
          </li>
          <li>
            <h2> 간편한 근무 조회</h2>
            <p> 간편하게 근무일정을 조회하세요!</p>
          </li>
          <li>
            <h2> 근무 통계 조회</h2>
            <p> 통계를 통해 D,E,N,OFF 일수를 체크해보세요!</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
