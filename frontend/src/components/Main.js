/**
 * file: Main.js
 * 메인메뉴
 * 작성자: 정진욱
 */

import React from 'react';
import { BiSidebar, BiSearchAlt } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import styled from 'styled-components';
import './Main.scss';

const styleMain = styled.div`
  background-image: url('/img/mainImg.png');
  width: 300px;
  height: 300px;
`;

const MyComponent = () => {
  return (
    <div className="Main">
      <div className="firstDiv">
        <p>of the nurse, by the nurse, for the nurse</p>
        <h2>간호사들을 위한 근무표</h2>
        <h1>Nurse on Duty</h1>
      </div>
      <div className="secondDiv">
        <ul>
          <li>
            <h2>
              <BiSidebar /> 편리한 근무 작성
            </h2>
            <p>
              근무표 자동생성은 손쉽게
              <br /> 근무표를 작성할 수 있습니다
            </p>
          </li>
          <li>
            <h2>
              <BiSearchAlt /> 간편한 근무 조회
            </h2>
            <p>
              간편하게 근무 일정을
              <br /> 조회할 수 있습니다.
            </p>
          </li>
          <li>
            <h2>
              <ImStatsDots /> 근무 통계 조회
            </h2>
            <p> 근무 통계를 조회할 수 있습니다.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
