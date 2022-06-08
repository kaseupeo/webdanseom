import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeMember,
  selectMember,
  updateMemberAsync,
  deleteMemberAsync,
} from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import EditUserInfo from '../../../components/app/myPage/EditUserInfo';

const EditUserInfoForm = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, name, phoneNumber, password, response, responseError } =
    useSelector(({ member }) => ({
      email: member.memberInfo.email,
      name: member.memberInfo.name,
      phoneNumber: member.memberInfo.phoneNumber,
      password: member.memberInfo.password,
      response: member.response,
      reponseError: member.responseError,
    }));
  useEffect(() => {
    dispatch(selectMember());
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeMember({ form: 'memberInfo', key: name, value: value }));
  };
  const onClickPwBtn = () => {
    navigate('/app/m/editPassword');
  };
  const onClickEdit = () => {
    if (!/^\d{11}$/.test(phoneNumber)) {
      setErrorMsg('수정실패!-전화번호 형식이 아닙니다.');
      return;
    }
    dispatch(updateMemberAsync({ name, phoneNumber }));

    if (response.response === 'success')
      alert('성공적으로 개인정보를 수정하였습니다.');
  };

  const onClickDelete = () => {
    navigate('/app/m/deleteUser');
  };
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <EditUserInfo
      onChange={onChange}
      onClickPwBtn={onClickPwBtn}
      onClickEdit={onClickEdit}
      onClickBack={onClickBack}
      onClickDelete={onClickDelete}
      email={email}
      name={name}
      phoneNumber={phoneNumber}
      errorMsg={errorMsg}
    />
  );
};

export default EditUserInfoForm;
