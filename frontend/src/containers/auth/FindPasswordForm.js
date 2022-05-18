import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, findPassword } from '../../modules/auth';
import FindPassword from '../../components/auth/FindPassword';
import { useNavigate } from 'react-router-dom';

const FindPasswordForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.findPassword,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'findPassword',
        key: name,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { email } = form;

    dispatch(
      findPassword({
        email,
      }),
    );
    if ([email].includes('')) {
      setError('이메일을 입력해주세요.');
      return;
    } else if (
      !/^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
        email,
      )
    ) {
      setError('이메일 형식이 맞지 않습니다.');
      return;
    } else {
      navigate('/auth/findPasswordConfirm');
      dispatch(initializeForm('findPassword'));
      return;
    }
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <FindPassword
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default FindPasswordForm;
