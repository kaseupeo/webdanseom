import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chagneField, initializeForm } from '../../modules/auth';
import AuthTemplate from '../../component/Auth/AuthTemplate';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

  // 이메일 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, email } = e.target;
    dispatch(
      chagneField({
        form: 'login',
        key: email,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault(); // 구현예정
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthTemplate
      type="login"
      form={form}
      onchagne={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
