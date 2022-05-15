/**
 * file: App.js
 *
 * 작성자: 정진욱
 */

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Main from './components/Main';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import FindPasswordPage from './pages/auth/FindPasswordPage';
import FindPasswordPost from './components/auth/FindPasswordPost';
import MainNavigation from './components/navigation/MainNavigation';
import NormalSelectWork from './components/App/NurseNormal/NormalSelectWork';
import HeadManagementWork from './components/App/NurseHead/HeadManagement';

import TopNavigation from './components/App/AppNavigation/TopNavigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route path="/" element={<Main />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignUpPage />} />
            <Route path="/auth/findPW" element={<FindPasswordPage />} />
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
