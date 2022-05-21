/**
 * file: TopNavigation.js
 * 간호사 Top 네비게이션
 * 작성자: 정진욱
 */
import { useEffect, useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { GrRefresh, GrMenu, GrUserSettings } from 'react-icons/gr';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopNavigation.scss';

const TopNavigation = ({ memeberName, onClickMenu }) => {
  const navigate = useNavigate();

  const [helpHiding, setHelpHiding] = useState(false);
  const [myPageHiding, setMyPageHiding] = useState(false);
  const [groupName, setGroupName] = useState('정신병동 1');
  const [memberName, setMemberName] = useState('김현숙');
  const [menuHiding, setMenuHiding] = useState(false);

  const onClickRefresh = () => {};
  const onClickHelp = () => {
    if (helpHiding) setHelpHiding(false);
    else {
      setMyPageHiding(false);
      setHelpHiding(true);
    }
  };
  const onClickMyPage = () => {
    if (myPageHiding) setMyPageHiding(false);
    else {
      setHelpHiding(false);
      setMyPageHiding(true);
    }
  };

  return (
    <div className="whole">
      <header className="TopNavigation">
        <div className="topNav">
          <div className="menu" onClick={onClickMenu}>
            <GrMenu className="menuIcon" />
          </div>

          <div className="groupName">
            <b>{memeberName}</b>
          </div>

          <div className="endElement">
            <div>
              <GrRefresh className="refreshIcon" onClick={onClickRefresh} />
            </div>

            <div className="help">
              <BiHelpCircle className="helpIcon" onClick={onClickHelp} />
              <RiArrowDropDownFill className="bottomArrowIcon" />
              {helpHiding && (
                <div className="helpMenu">
                  <ul>
                    <li>도움말 가이드</li>
                    <li>피드백 보내기</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="myPage" onClick={onClickMyPage}>
              <GrUserSettings className="settingIcon" />
              <RiArrowDropDownFill className="bottomArrowIcon" />
              {myPageHiding && (
                <div className="myPageMenu">
                  <div className="myName">
                    <b>{memberName} 님</b>
                  </div>
                  <ul style={{ margin: '0px' }}>
                    <li>내 정보 수정</li>
                    <li>그룹설정</li>
                    <hr />
                    <li>로그아웃</li>
                  </ul>
                </div>
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
