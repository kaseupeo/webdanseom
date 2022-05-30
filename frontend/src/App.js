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
import './App.css';
import MainForm from './pages/MainForm';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import FindPasswordPage from './pages/auth/FindPasswordPage';

import TopNavigationForm from './containers/app/common/TopNavigationForm';
import SideNavigationForm from './containers/app/common/SideNavigationForm';
import MainNavigation from './components/auth/nav/MainNavigation';
import HeadSelectWork from './pages/app/head/SelectWork';
import HeadManagementWork from './pages/app/head/ManagementWork';
import HeadStasticsWork from './pages/app/head/StatisticsWork';
import NormalSelectWork from './pages/app/normal/SelectWork';
import NormalRequestWokr from './pages/app/normal/RequestWork.js';
import NormalStasticsWork from './pages/app/normal/StatisticsWork';
import Temp from './temp/temp';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route path="/" element={<MainForm />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignUpPage />} />
            <Route path="/auth/findPassword" element={<FindPasswordPage />} />
          </Route>

          <Route element={<TopNavigationForm />}>
            <Route path="/app" element={<SideNavigationForm />}>
              <Route path="/app/g/" element={<Temp />} />

              <Route
                path="/app/h/ManagementWork/"
                element={<HeadManagementWork />}
              />
              <Route path="/app/h/selectWork" element={<HeadSelectWork />} />
              <Route
                path="/app/h/statisticsWork"
                element={<HeadStasticsWork />}
              />

              <Route path="/app/n/selectWork" element={<NormalSelectWork />} />
              <Route
                path="/app/n/requestWork/"
                element={<NormalRequestWokr />}
              />
              <Route
                path="/app/n/statisticsWork"
                element={<NormalStasticsWork />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
