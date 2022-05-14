import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import SignUpElement from '../../components/auth/SignUpElement';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.signUp }));

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
    e.preventDefault(); // 구현예정
  };
  useEffect(() => {
    dispatch(initializeForm('signUp'));
  }, [dispatch]);

  return <SignUpElement form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
