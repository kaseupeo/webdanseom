import React from 'react';
import './MainNavigation.scss';
import { Outlet, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const MyComponent = () => {

    const navigate =useNavigate();
    return (
        <div>
          <header className="MainNavigation">

          <div className="btn">
          <Link to="/auth/login">로그인</Link>
          <p>&nbsp;</p>
          <Link to="/auth/signup">회원가입</Link>
          </div>
 <h2 className="title">Nurse on Duty</h2>

          </header>

        <main>
            <Outlet/>
        </main>
          </div>
    );
};

export default MyComponent;
