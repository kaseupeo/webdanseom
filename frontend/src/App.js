/**
 * file: App.js
 *
 * 작성자: 정진욱
 */

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
import FindPasswordPost from './pages/auth/FindPasswordPost';
import MainNavigation from './components/navigation/MainNavigation';
import NormalSelectWork from './components/app/nurseNormal/NormalSelectWork';
import HeadManagementWork from './pages/app/head/ManagementWork';
import TopNavigation from './components/app/appNavigation/TopNavigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route path="/" element={<Main />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignUpPage />} />
            <Route path="/auth/findPassword" element={<FindPasswordPage />} />
            <Route
              path="/auth/findPasswordConfirm"
              element={<FindPasswordPost />}
            />
          </Route>

          <Route path="/app" element={<TopNavigation />}>
            <Route
              path="/app/head/ManagementWork"
              element={<HeadManagementWork />}
            />
            <Route path="/app/selectWork" element={<NormalSelectWork />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
