import { useState } from 'react';
import { GrUserSettings } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import {
  BsFillPencilFill,
  BsCalendar4,
  BsFillPieChartFill,
  BsFillChatRightTextFill,
} from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
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
    <div className="SideNavigation">
      <div className="nav">
        <ul className={!menuHiding ? 'ul_hide_nav' : ''}>
          {joinGroup ? (
            headNurseCheck ? (
              <div>
                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu0}>
                    <BsFillPencilFill />
                  </li>
                ) : (
                  <li onClick={onClickMenu0}>
                    <BsFillPencilFill />
                    <b>근무표 관리</b>
                  </li>
                )}

                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu1}>
                    <BsCalendar4 />
                  </li>
                ) : (
                  <li onClick={onClickMenu1}>
                    <BsCalendar4 />
                    <b>근무표 조회</b>
                  </li>
                )}

                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu2}>
                    <BsFillPieChartFill />{' '}
                  </li>
                ) : (
                  <li onClick={onClickMenu2}>
                    <BsFillPieChartFill />
                    <b>통계</b>
                  </li>
                )}
              </div>
            ) : (
              <div>
                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu0}>
                    <BsCalendar4 />
                  </li>
                ) : (
                  <li onClick={onClickMenu0}>
                    <BsCalendar4 /> <b>근무표 조회</b>
                  </li>
                )}

                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu1}>
                    <BsFillChatRightTextFill />
                  </li>
                ) : (
                  <li onClick={onClickMenu1}>
                    <BsFillChatRightTextFill /> <b>근무 요청</b>
                  </li>
                )}

                {!menuHiding ? (
                  <li className="icon" onClick={onClickMenu2}>
                    <BsFillPieChartFill className="icon" />
                  </li>
                ) : (
                  <li onClick={onClickMenu2}>
                    <BsFillPieChartFill />
                    <b>통계</b>
                  </li>
                )}
              </div>
            )
          ) : (
            <div>
              {!menuHiding ? (
                <li className="icon" onClick={onClickMenu0}>
                  <HiUserGroup />
                </li>
              ) : (
                <li onClick={onClickMenu0}>
                  <HiUserGroup />
                  <b>그룹 생성/참가</b>
                </li>
              )}
            </div>
          )}
        </ul>
      </div>

      <main className={menuHiding ? 'content' : 'content_hide_nav'}>
        <Outlet />
      </main>
    </div>
  );
};

export default SideNavigation;
