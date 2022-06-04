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

import TopNavigationForm from './containers/app/nav/TopNavigationForm';
import SideNavigationForm from './containers/app/nav/SideNavigationForm';
import MainNavigation from './components/auth/nav/MainNavigation';
import HeadSelectWork from './pages/app/head/SelectWork';
import HeadManagementWork from './pages/app/head/ManagementWork';
import HeadStasticsWork from './pages/app/head/StatisticsWork';
import NormalSelectWork from './pages/app/normal/SelectWork';
import NormalRequestWokr from './pages/app/normal/RequestWork.js';
import NormalStasticsWork from './pages/app/normal/StatisticsWork';
import SelectGroup from './pages/app/new/SelectGroup';
import JoinGroup from './pages/app/new/JoinGroup';
import CreateGroup from './pages/app/new/CreateGroup';
import EditUserInfo from './pages/app/myPage/EditUserInfo';
import EditGroupInfo from './pages/app/myPage/EditGroupInfo';
import EditPassword from './pages/app/myPage/EditPassword';
import DeleteUser from './pages/app/myPage/DeleteUser';
import NotFound from './pages/error/NotFound404';
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
              <Route path="/app/g/selectGroup" element={<SelectGroup />} />
              <Route path="/app/g/createGroup" element={<CreateGroup />} />
              <Route path="/app/g/joinGroup" element={<JoinGroup />} />

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
              <Route path="/app/m/editUserInfo" element={<EditUserInfo />} />
              <Route path="/app/m/editGroupInfo" element={<EditGroupInfo />} />
              <Route path="/app/m/editPassword" element={<EditPassword />} />
              <Route path="/app/m/deleteUser" element={<DeleteUser />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
