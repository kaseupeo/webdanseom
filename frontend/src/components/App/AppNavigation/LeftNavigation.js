import { useState } from 'react';

import {
  BsFillPencilFill,
  BsCalendar4,
  BsFillPieChartFill,
  BsFillChatRightTextFill,
} from 'react-icons/bs';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './LeftNavigation.scss';
import React from 'react';

const LeftNavigation = ({ menu }) => {
  const [menuHiding, setMenuHiding] = useState(menu);

  return (
    <div>
      <div></div>
      <span className="LeftNavigation">
        <div className="nav">
          <ul>
            <Link
              to="/app/head/ManagementWork"
              style={{ textDecorationLine: 'none' }}
            >
              <li>
                <BsFillPencilFill />
                {menuHiding && <b>근무표 관리</b>}
              </li>
            </Link>

            <Link to="/app/selectWork" style={{ textDecorationLine: 'none' }}>
              <li>
                <BsCalendar4 />
                {menuHiding && <b>근무표 조회</b>}
              </li>
            </Link>
            <Link to="/app" style={{ textDecorationLine: 'none' }}>
              <li>
                <BsFillChatRightTextFill />
                {menuHiding && <b>근무 요청</b>}
              </li>
            </Link>
            <Link to="/app" style={{ textDecorationLine: 'none' }}>
              <li>
                <BsFillPieChartFill />
                {menuHiding && <b>통계</b>}
              </li>
            </Link>
            <li></li>
          </ul>
        </div>

        <main className="content">
          <Outlet />
        </main>
      </span>
    </div>
  );
};

export default LeftNavigation;
