import React from 'react';
import EditPasswordForm from '../../../containers/app/myPage/EditPasswordForm';
import EditTemplate from '../../../components/app/myPage/EditTemplate';
import Title from '../../../components/app/common/Title';
const EditPassword = () => {
  return (
    <div>
      <span>
        <Title title="비밀번호 변경" />
      </span>
      <EditTemplate>
        <EditPasswordForm />
      </EditTemplate>
    </div>
  );
};

export default EditPassword;
