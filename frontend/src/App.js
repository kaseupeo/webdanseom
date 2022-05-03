import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Main from './component/Main';
import SignUpTemplate from './component/SignUpTemplate';
import LoginTemplate from './component/LoginTemplate';
import FindPassword from './component/FindPassword';
import MainNavigation from './component/Navigation/MainNavigation';
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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
