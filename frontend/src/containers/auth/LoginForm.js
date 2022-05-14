import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import LoginElement from '../../components/auth/LoginElement';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

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
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <LoginElement form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
