/*
 * 로그인 컨테이너
 *
 */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import LoginElement from '../../components/auth/LoginElement';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [error, setError] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkLogin, setCheckLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
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

    dispatch(
      login({
        email,
        password,
      }),
    );
    if ([email].includes('')) {
      setError('이메일을 입력해주세요.');
      return;
    } else if ([password].includes('')) {
      setError('비밀번호를 입력해주세요.');
      return;
    }
    if (!checkEmail) {
      setError('가입되지 않은 이메일입니다.');
      return;
    } else if (!checkLogin) {
      setError('잘못된 비밀번호 입니다.');
      return;
    }
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (auth.response === null) {
      setError('');
    } else if (auth.response === 'error') {
      if (auth.data === '조회되지 않습니다.') {
        setCheckEmail(false);
        setCheckLogin(true);
        return;
      } else if (auth.data === '비밀번호가 틀립니다.') {
        setCheckEmail(true);
        setCheckLogin(false);
        return;
      } else {
        setCheckEmail(true);
        setCheckLogin(true);
      }
    } else {
      setError('');
      navigate('/app');
      return;
    }
  }, [auth]);

  return (
    <LoginElement
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
