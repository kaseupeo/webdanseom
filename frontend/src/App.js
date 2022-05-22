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

import TopNavigationForm from './containers/app/common/TopNavigationForm';
import SideNavigationForm from './containers/app/common/SideNavigationForm';
import MainNavigation from './components/auth/nav/MainNavigation';
import HeadSelectWork from './pages/app/head/SelectWork';
import HeadManagementWork from './pages/app/head/ManagementWork';
import HeadStasticsWork from './pages/app/head/StatisticsWork';
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

          <Route element={<TopNavigationForm />}>
            <Route element={<SideNavigationForm />}>
              <Route
                path="/app/h/ManagementWork"
                element={<HeadManagementWork />}
              />
              <Route path="/app/h/selectWork" element={<HeadSelectWork />} />
              <Route
                path="/app/h/statisticsWork"
                element={<HeadStasticsWork />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
