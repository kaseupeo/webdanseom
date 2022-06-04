import React from 'react';
import EditUserInfoForm from '../../../containers/app/myPage/EditUserInfoForm';
import EditTemplate from '../../../components/app/myPage/EditTemplate';
import Title from '../../../components/app/common/Title';
const EditUserInfoPage = () => {
  return (
    <div>
      <span>
        <Title title="내 정보 수정" />
      </span>
      <EditTemplate>
        <EditUserInfoForm />
      </EditTemplate>
    </div>
  );
};

export default EditUserInfoPage;
