/*
 * 로그인 컨테이너
 *
 */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  login,
  logout,
  logoutSync,
} from '../../modules/auth';

import LoginElement from '../../components/auth/LoginElement';
import AccessLoginElement from '../../components/auth/AccessLoginElement';
import { useNavigate } from 'react-router-dom';
import { initLoginState, selectMemberAsync } from '../../modules/member';
import { setGroupState } from '../../modules/menu';
const LoginForm = () => {
  const [error, setError] = useState('');
  const [checkLogin, setCheckLogin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginState } = useSelector(({ member }) => ({
    loginState: member.loginState,
  }));
  const { form, response, responseError } = useSelector(({ auth }) => ({
    form: auth.login,
    response: auth.response,
    responseError: auth.responseError,
  }));
  const { accessName, accessEmail } = useSelector(({ member }) => ({
    accessName: member.memberInfo.name,
    accessEmail: member.memberInfo.email,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault(); // => 로그인 처리
    const { email, password } = form;
    setCheckLogin(true);
    dispatch(
      login({
        email,
        password,
      }),
    );
    if ([email].includes('')) {
      setError('이메일을 입력해주세요.');
      setCheckLogin(false);
      return;
    } else if ([password].includes('')) {
      setError('비밀번호를 입력해주세요.');
      setCheckLogin(false);
      return;
    }
  };
  const onClickLogout = () => {
    dispatch(logoutSync())
      .then(
        dispatch(
          setGroupState({
            groupName: null,
            joinGroup: null,
            headNurseCheck: null,
          }),
        ),
      )
      .then(dispatch(initLoginState()))
      .then(
        setTimeout(function () {
          window.location.replace(window.location.pathname);
        }, 1000),
      );
  };
  const onClickAccess = () => {
    navigate('/app');
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);
  useEffect(() => {
    setTimeout(function () {
      dispatch(selectMemberAsync());
    }, 1500);
  }, []);
  useEffect(() => {
    !loginState && dispatch(initLoginState());
  }, [loginState]);
  useEffect(() => {
    if (checkLogin) {
      if (response.response === null) {
        setError('');
      } else if (response.response === 'error') {
        if (response.data === '조회되지 않습니다.') {
          setError('가입되지 않은 이메일입니다.');
          return;
        }
        if (response.data === '비밀번호가 틀립니다.') {
          setError('잘못된 비밀번호 입니다.');
          return;
        }
        setCheckLogin(false);
      } else {
        setError('');
        navigate('/app');
        return;
      }
    }
  }, [response]);

  return (
    <div>
      {!(loginState === null || loginState === false) ? (
        <AccessLoginElement
          name={accessName}
          email={accessEmail}
          onClickAccess={onClickAccess}
          onClickLogout={onClickLogout}
        />
      ) : (
        <LoginElement
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          error={error}
        />
      )}
    </div>
  );
};

export default LoginForm;
