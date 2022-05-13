/**
 * file: App.js
 *
 * 작성자: 정진욱
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Main from './component/Main';
import SignUpTemplate from './component/Auth/SignUpTemplate';
import LoginTemplate from './component/Auth/LoginTemplate';
import FindPassword from './component/Auth/FindPassword';
import FindPasswordPost from './component/Auth/FindPasswordPost';
import MainNavigation from './component/Navigation/MainNavigation';
import NormalSelectWork from './component/App/NurseNormal/NormalSelectWork';
import HeadManagementWork from './component/App/NurseHead/HeadManagement';

import TopNavigation from './component/App/AppNavigation/TopNavigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route path="/" element={<Main />} />
            <Route path="/auth/login" element={<LoginTemplate />} />
            <Route path="/auth/signup" element={<SignUpTemplate />} />
            <Route path="/auth/findPW" element={<FindPassword />} />
            <Route path="/auth/findPWPost" element={<FindPasswordPost />} />
          </Route>

          <Route path="/app" element={<TopNavigation />}>
            <Route path="/app/selectWork" element={<NormalSelectWork />} />
            <Route path="/app/management" element={<HeadManagementWork />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
