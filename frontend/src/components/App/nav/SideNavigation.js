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
                  {!menuHiding && (
                    <li onClick={onClickMenu0}>
                      <BsFillPencilFill />
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu0}>
                      <BsFillPencilFill />
                      <b>근무표 관리</b>
                    </li>
                  )}

                  {!menuHiding && (
                    <li onClick={onClickMenu1}>
                      <BsCalendar4 />
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu1}>
                      <BsCalendar4 />
                      <b>근무표 조회</b>
                    </li>
                  )}

                  {!menuHiding && (
                    <li onClick={onClickMenu2}>
                      <BsFillPieChartFill />{' '}
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu2}>
                      <BsFillPieChartFill />
                      <b>통계</b>
                    </li>
                  )}
                </div>
              ) : (
                <div>
                  {!menuHiding && (
                    <li onClick={onClickMenu0}>
                      <BsCalendar4 />
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu0}>
                      <BsCalendar4 /> <b>근무표 조회</b>
                    </li>
                  )}

                  {!menuHiding && (
                    <li onClick={onClickMenu1}>
                      <BsFillChatRightTextFill />
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu1}>
                      <BsFillChatRightTextFill /> <b>근무 요청</b>
                    </li>
                  )}

                  {!menuHiding && (
                    <li onClick={onClickMenu2}>
                      <BsFillPieChartFill className="icon" />
                    </li>
                  )}
                  {menuHiding && (
                    <li onClick={onClickMenu2}>
                      <BsFillPieChartFill />
                      <b>통계</b>
                    </li>
                  )}
                </div>
              )
            ) : (
              <div>
                {!menuHiding && (
                  <li className="icon">
                    <BsFillPieChartFill />{' '}
                  </li>
                )}
                {menuHiding && (
                  <li>
                    <BsFillPieChartFill />
                    <b>그룹 생성/참가</b>
                  </li>
                )}
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
