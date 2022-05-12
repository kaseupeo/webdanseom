/**
 * file: TopNavigation.js
 * 간호사 Top 네비게이션
 * 작성자: 정진욱
 */

import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopNavigation.scss';

const TopNavigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="TopNavigation">
        <Link to="/app" className="title">
          <b>NurseOnDuty</b>
        </Link>

        <div className="btn">
          <Link to="/app/management" className="navWork">
            <b>근무표관리</b>
          </Link>
          <Link to="/app/selectWork" className="navWork">
            <b>근무표조회</b>
          </Link>
          <Link to="/app" className="navWorkApp">
            <b>근무신청</b>
          </Link>
          <b className="navWork">마이페이지</b>
          <Link to="/auth/login" className="logout">
            로그아웃
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TopNavigation;
