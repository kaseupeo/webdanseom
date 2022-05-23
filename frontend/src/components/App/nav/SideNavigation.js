import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BsFillPencilFill,
  BsCalendar4,
  BsFillPieChartFill,
  BsFillChatRightTextFill,
} from 'react-icons/bs';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './SideNavigation.scss';
import React from 'react';

const SideNavigation = ({
  joinGroup,
  headNurseCheck,
  onClickMenu0,
  onClickMenu1,
  onClickMenu2,
}) => {
  const { menuHiding } = useSelector(({ menu }) => ({
    menuHiding: menu.hidingMenu,
  }));
  return (
    <div>
      <div></div>
      <div className="LeftNavigation">
        <div className="nav">
          <ul>
            {joinGroup ? (
              headNurseCheck ? (
                <div>
                  <li onClick={onClickMenu0}>
                    <BsFillPencilFill />
                    {menuHiding && <b>근무표 관리</b>}
                  </li>

                  <li onClick={onClickMenu1}>
                    <BsCalendar4 />
                    {menuHiding && <b>근무표 조회</b>}
                  </li>

                  <li onClick={onClickMenu2}>
                    <BsFillPieChartFill />
                    {menuHiding && <b>통계</b>}
                  </li>
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
              )
            ) : (
              <div>
                <li>
                  <BsFillPieChartFill />
                  {menuHiding && <b>그룹 생성/참가</b>}
                </li>
              </div>
            )}
          </ul>
        </div>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SideNavigation;
