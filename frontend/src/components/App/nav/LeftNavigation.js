import { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { menuHiding } = useSelector(({ menu }) => ({
    menuHiding: menu.hidingMenu,
  }));
  return (
    <div>
      <div></div>
      <span className="LeftNavigation">
        <div className="nav">
          <ul>
            {true ? (
              <div>
                <Link
                  to="/app/h/ManagementWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsFillPencilFill />
                    {menuHiding && <b>근무표 관리</b>}
                  </li>
                </Link>

                <Link
                  to="/app/h/selectWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsCalendar4 />
                    {menuHiding && <b>근무표 조회</b>}
                  </li>
                </Link>
                <Link
                  to="/app/h/statisticsWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsFillPieChartFill />
                    {menuHiding && <b>통계</b>}
                  </li>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/app/n/selectWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsCalendar4 />
                    {menuHiding && <b>근무표 조회</b>}
                  </li>
                </Link>
                <Link
                  to="/app/n/requestWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsFillChatRightTextFill />
                    {menuHiding && <b>근무 요청</b>}
                  </li>
                </Link>
                <Link
                  to="/app/n/statisticsWork"
                  style={{ textDecorationLine: 'none' }}
                >
                  <li>
                    <BsFillPieChartFill />
                    {menuHiding && <b>통계</b>}
                  </li>
                </Link>
              </div>
            )}
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
