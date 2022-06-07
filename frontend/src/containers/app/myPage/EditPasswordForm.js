import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeMember,
  initializeForm,
  updatePasswordAsync,
} from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import EditPasswordInfo from '../../../components/app/myPage/EditPassword';

const EditPasswordInfoForm = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { member, beforePassword, passwordChecked, afterPassword, response } =
    useSelector(({ member }) => ({
      beforePassword: member.passwordInfo.beforePassword,
      passwordChecked: member.passwordInfo.passwordChecked,
      afterPassword: member.passwordInfo.afterPassword,
      response: member.response,
    }));
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeMember({ form: 'passwordInfo', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (beforePassword === null || beforePassword === '') {
      setErrorMsg('현재 사용중인 비밀번호를 입력해주세요.');
      return;
    } else if (afterPassword === null || afterPassword === '') {
      setErrorMsg('바꿀 비밀번호를 입력해주세요.');
      return;
    } else if (passwordChecked === null || passwordChecked === '') {
      setErrorMsg('바꿀 비밀번호 확인을 입력해주세요.');
      return;
    } else if (afterPassword !== passwordChecked) {
      setErrorMsg('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
      return;
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/.test(
        afterPassword,
      )
    ) {
      setErrorMsg(
        '비밀번호는 영문,숫자,특수문자를 포함한 8자 이상이어야 합니다.',
      );
      return;
    }
    dispatch(updatePasswordAsync({ beforePassword, afterPassword }));

    dispatch(initializeForm('response'));
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
  }, []);
  useEffect(() => {
    if (response.message === '성공적으로 사용자의 비밀번호를 변경했습니다.') {
      setErrorMsg('');
      alert('비밀번호가 성공적으로 변경되었습니다!');
      dispatch(initializeForm('passwordInfo'));
    } else {
      if (response.message === '사용자의 비밀번호를 변경할 수 없습니다.') {
        if (response.data === '비밀번호가 틀립니다.') {
          setErrorMsg('비밀번호가 틀립니다.');
          return;
        }
        if (response.data === '기존 비밀번호랑 동일합니다.') {
          setErrorMsg('기존 비밀번호와 동일합니다.');
          return;
        }
      }
    }
    dispatch(initializeForm('response'));
  }, [dispatch, response.message]);
  return (
    <EditPasswordInfo
      onChange={onChange}
      onSubmit={onSubmit}
      errorMsg={errorMsg}
      beforePassword={beforePassword}
      passwordChecked={passwordChecked}
      afterPassword={afterPassword}
    />
  );
};

export default EditPasswordInfoForm;
