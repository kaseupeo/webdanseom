import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import LoginElement from '../../components/auth/LoginElement';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError, user, headers } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      // auth: auth.auth,
      // authError: auth.authError,
      // headers: auth.headers,
      // user: user.user,
    }),
  );

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
    navigate('/');
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <LoginElement form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
