/**
 * file: TopNavigation.js
 * 간호사 Top 네비게이션
 * 작성자: 정진욱
 */
import { useEffect, useState, useRef } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { GrRefresh, GrMenu, GrUserSettings } from 'react-icons/gr';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopNavigation.scss';

const TopNavigation = ({ groupName, onClickLogout, onClickMenu, error }) => {
  const navigate = useNavigate();
  const outHelping = useRef();

  const [helpHiding, setHelpHiding] = useState(false);
  const [myPageHiding, setMyPageHiding] = useState(false);
  const [memberName, setMemberName] = useState('김현숙');
  const [menuHiding, setMenuHiding] = useState(false);

  const modalCloseHandler = ({ target }) => {
    console.log('zz');
    if (helpHiding && !outHelping.current.contains(target))
      setHelpHiding(false);
  };

  useEffect(() => {
    window.addEventListener('click', modalCloseHandler);
    return () => {
      window.removeEventListener('click', modalCloseHandler);
    };
  }, []);

  const onClickRefresh = () => {};
  const onClickHelp = () => {
    if (helpHiding) setHelpHiding(false);
    else {
      setHelpHiding(true);
    }
  };
  const onClickMyPage = () => {
    if (myPageHiding) setMyPageHiding(false);
    else {
      setMyPageHiding(true);
    }
  };
  const onClickInit = () => {
    setHelpHiding(false);
    setMyPageHiding(false);
  };

  const onClickEditUserInfo = () => {
    navigate('/editUserInfo');
  };
  return (
    <div className="whole">
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
              {helpHiding && (
                <div className="helpMenu" ref={outHelping}>
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
                    <li onClick={onClickEditUserInfo}>내 정보 수정</li>
                    <li>그룹설정</li>
                    <hr />
                    <li onClick={onClickLogout}>로그아웃</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <Outlet className="content" />
      </main>
    </div>
  );
};

export default TopNavigation;
