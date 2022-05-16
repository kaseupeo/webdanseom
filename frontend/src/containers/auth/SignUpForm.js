import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signUp } from '../../modules/auth';
import SignUpElement from '../../components/auth/SignUpElement';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
  const [error, setError] = useState('');
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
    const { email, password, passwordConfirm, name, phoneNumber } = form;
    if ([email, password, passwordConfirm, name].includes('')) {
      setError('입력하지 않은 사항이 있습니다.');
      return;
    }
    //이메일 정규식 체크
    if (
      !/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(
        email,
      )
    ) {
      setError('이메일 형식이 맞지 않습니다.');

      return;
    }

    // 비밀번호 정규식 체크
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
        password,
      )
    ) {
      setError('비밀번호는 영문,숫자,특수문자를 포함한 8자 이상이어야 합니다.');
      return;
    }

    // 비밀번호 확인 체크

    if (passwordConfirm !== password) {
      setError('비밀번호가 일치하지 않습니다.');

      return;
    }

    if (null) {
      setError('이미 가입된 이메일입니다.');
      return;
    }

    dispatch(
      signUp({
        email,
        password,
        name,
        phoneNumber,
      }),
    );
    navigate('/');
  };
  useEffect(() => {
    dispatch(initializeForm('signUp'));
  }, [dispatch]);

  return (
    <SignUpElement
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default SignUpForm;
