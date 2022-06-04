import React from 'react';
import DeleteUserForm from '../../../containers/app/myPage/DeleteUserForm';
import EditTemplate from '../../../components/app/myPage/EditTemplate';
import Title from '../../../components/app/common/Title';
const EditUserInfoPage = () => {
  return (
    <div>
      <span>
        <Title title="회원탈퇴" />
      </span>
      <EditTemplate>
        <DeleteUserForm />
      </EditTemplate>
    </div>
  );
};

export default EditUserInfoPage;
