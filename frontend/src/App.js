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
import MainNavigation from './component/Navigation/MainNavigation';
import NormalCalendar from './component/App/NormalNurse/NormalCalendar';

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
            <Route path="/calendar" element={<NormalCalendar />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
