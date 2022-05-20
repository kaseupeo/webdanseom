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

import MainNavigation from './components/auth/nav/MainNavigation';
import NormalSelectWork from './components/app/normal/NormalSelectWork';
import HeadManagementWork from './pages/app/head/ManagementWork';
import TopNavigationForm from './containers/app/common/TopNavigationForm';
import LeftNavigation from './components/app/nav/LeftNavigation';
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
          </Route>

          <Route path="/app" element={<TopNavigationForm />}>
            <Route path="/app" element={<LeftNavigation />}>
              <Route
                path="/app/head/ManagementWork"
                element={<HeadManagementWork />}
              />
              <Route path="/app/selectWork" element={<NormalSelectWork />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
