/**
 * file: TopNavigation.js
 * 간호사 Top 네비게이션
 * 작성자: 정진욱
 */
import { useEffect, useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import {
  BsFillPencilFill,
  BsCalendar4,
  BsFillPieChartFill,
  BsFillChatRightTextFill,
} from 'react-icons/bs';
import { GrRefresh, GrMenu, GrUserSettings } from 'react-icons/gr';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopNavigation.scss';
import './LeftNavigation.scss';
const TopNavigation = () => {
  const navigate = useNavigate();
  const [menuHiding, setMenuHiding] = useState(true);
  const [helpHiding, setHelpHiding] = useState(false);
  const [myPageHiding, setMyPageHiding] = useState(false);
  const [groupName, setGroupName] = useState('정신병동 1');
  const [memberName, setMemberName] = useState('김현숙');
  const onClickMenu = () => {
    if (menuHiding) setMenuHiding(false);
    else setMenuHiding(true);
  };

  const onClickHelp = () => {
    if (helpHiding) setHelpHiding(false);
    else setHelpHiding(true);
  };
  const onClickMyPage = () => {
    if (myPageHiding) setMyPageHiding(false);
    else setMyPageHiding(true);
  };

  return (
    <div>
      <header className="TopNavigation">
        <div className="topNav">
          <div className="menu" onClick={onClickMenu}>
            <GrMenu className="menuIcon" />
          </div>

          <div className="groupName">
            <b>{groupName}</b>
          </div>

          <div className="endElement">
            <div>
              <GrRefresh className="refreshIcon" />
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
                  {memberName} 님
                  <ul>
                    <hr />
                    <li>내 정보 수정</li>
                    <li>그룹 탈퇴</li>
                    <hr />
                    <li>로그 아웃</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <span className="LeftNavigation">
        <div className="nav">
          <ul>
            <Link to="/app/management" style={{ textDecorationLine: 'none' }}>
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

export default TopNavigation;
