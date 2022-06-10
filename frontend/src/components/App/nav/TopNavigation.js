/**
 * file: TopNavigation.js
 * 간호사 Top 네비게이션
 * 작성자: 정진욱
 */
import React, { useEffect, useState, useRef } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { GrRefresh, GrMenu, GrUserSettings } from 'react-icons/gr';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyPageModal from './modals/MyPageModal';
import HelpModal from './modals/HelpModal';
import './TopNavigation.scss';

const TopNavigation = ({
  groupName,
  memberName,
  onClickLogout,
  onClickMenu,
  onClickRefresh,
  error,
}) => {
  const navigate = useNavigate();

  const [isMyPage, setIsMyPage] = useState(false);

  const [isHelp, setIsHelp] = useState(false);

  const onClickEditUserInfo = () => {
    navigate('/app/m/editUserInfo');
  };
  const onClickEditGroupInfo = () => {
    navigate('/app/m/editGroupInfo');
  };
  return (
    <div
      className="whole"
      onClick={() => {
        setIsMyPage(false);
        setIsHelp(false);
      }}
    >
      <header className="TopNavigation">
        <div className="topNav">
          <div className="menu" onClick={onClickMenu}>
            <GrMenu className="menuIcon" />
          </div>

          <div className="groupName">
            <b>{groupName ? groupName : null}</b>
          </div>

          <div className="endElement">
            <div>
              <GrRefresh className="refreshIcon" onClick={onClickRefresh} />
            </div>

            <div className="help">
              <BiHelpCircle
                className="helpIcon"
                onClick={(e) => {
                  setIsHelp(!isHelp);
                  setIsMyPage(false);
                  e.stopPropagation();
                }}
              />
              <RiArrowDropDownFill className="bottomArrowIcon" />
            </div>

            {isHelp && (
              <HelpModal
                onClick={(e) => {
                  setIsHelp(false);
                  e.stopPropagation();
                }}
              />
            )}

            <div
              className="myPage"
              onClick={(e) => {
                setIsMyPage(!isMyPage);
                setIsHelp(false);
                e.stopPropagation();
              }}
            >
              <GrUserSettings className="settingIcon" />
              <RiArrowDropDownFill className="bottomArrowIcon" />
            </div>
            {isMyPage && (
              <MyPageModal
                memberName={memberName}
                onClickEditUserInfo={onClickEditUserInfo}
                onClickEditGroupInfo={onClickEditGroupInfo}
                onClickLogout={onClickLogout}
                onClick={(e) => {
                  setIsMyPage(true);
                }}
              />
            )}
          </div>
        </div>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default TopNavigation;
