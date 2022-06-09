import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import member, {
  changeMember,
  deleteMemberAsync,
  initializeForm,
} from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import DeleteUser from '../../../components/app/myPage/DeleteUser';

const DeleteUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  const { email, password, response } = useSelector(
    ({ member }) => ({
      email: member.memberInfo.email,
      password: member.deleteInfo.password,
      response: member.response,
    }),
    shallowEqual,
  );
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeMember({ form: 'deleteInfo', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === null || password === '') {
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }
    dispatch(deleteMemberAsync({ email, password }));
    if ((response.message = '회원탈퇴를 성공했습니다.')) {
      alert('회원탈퇴가 완료되었습니다.');
      dispatch(initializeForm('deleteInfo'));
      dispatch(initializeForm('memberInfo'));
      navigate('/auth/login');
    }
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
    dispatch(initializeForm('deleteInfo'));
  }, []);
  useEffect(() => {
    if (response.message === '회원탈퇴를 할 수 없습니다.') {
      setErrorMsg('비밀번호가 옳지 않습니다.');
      return;
    }
  }, [response]);

  return (
    <DeleteUser onChange={onChange} onSubmit={onSubmit} errorMsg={errorMsg} />
  );
};

export default DeleteUserForm;
