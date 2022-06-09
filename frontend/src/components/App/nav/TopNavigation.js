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
  const outMyPage = useRef();
  const [isMyPage, setIsMyPage] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (outMyPage.current || !outMyPage.current.contains(e.target)) {
        setIsMyPage(false);
      }
    };

    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [outMyPage]);

  const [isHelp, setIsHelp] = useState(false);

  const onClickHelp = () => {
    setIsHelp(true);
  };

  const onClickEditUserInfo = () => {
    navigate('/app/m/editUserInfo');
  };
  const onClickEditGroupInfo = () => {
    navigate('/app/m/editGroupInfo');
  };
  return (
    <div className="whole">
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
                onClick={() => {
                  onClickHelp();
                }}
              />
              <RiArrowDropDownFill className="bottomArrowIcon" />
              {isHelp && (
                <div className="helpMenu">
                  <ul>
                    <li>도움말 가이드</li>
                    <li>피드백 보내기</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="myPage"
              onClick={() => {
                setIsMyPage(!isMyPage);
              }}
            >
              <GrUserSettings className="settingIcon" />
              <RiArrowDropDownFill className="bottomArrowIcon" />
              {isMyPage && (
                <MyPageModal
                  ref={outMyPage}
                  memberName={memberName}
                  onClickEditUserInfo={onClickEditUserInfo}
                  onClickEditGroupInfo={onClickEditGroupInfo}
                  onClickLogout={onClickLogout}
                ></MyPageModal>
              )}
            </div>
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
