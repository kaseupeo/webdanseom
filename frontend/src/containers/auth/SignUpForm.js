import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signUp } from '../../modules/auth';
import SignUpElement from '../../components/auth/SignUpElement';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signUp',
        key: name,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm, userName, phone } = form;
    if (password !== passwordConfirm) {
      // setError

      return;
    }
    if ([email, password, passwordConfirm, userName].includes('')) {
      // setError
      return;
    }
    dispatch(
      signUp({
        email,
        password,
        userName,
        phone,
      }),
    );
    navigate('/');
  };
  useEffect(() => {
    dispatch(initializeForm('signUp'));
  }, [dispatch]);

  return <SignUpElement form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
