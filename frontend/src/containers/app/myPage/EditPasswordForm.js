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
  const { beforePassword, passwordChecked, afterPassword, response } =
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
  const onClick = () => {
    dispatch(updatePasswordAsync({ beforePassword, afterPassword }));
    dispatch(initializeForm('response'));
  };
  useEffect(() => {
    if (response.response === 'success') {
      alert('비밀번호가 성공적으로 변경되었습니다!');
    } else {
      setErrorMsg(response.data);
    }
  }, [dispatch, response]);
  return (
    <EditPasswordInfo
      onChange={onChange}
      onClick={onClick}
      errorMsg={errorMsg}
    />
  );
};

export default EditPasswordInfoForm;
