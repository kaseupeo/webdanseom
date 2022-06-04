import React from 'react';
import EditGroupInfoForm from '../../../containers/app/myPage/EditGroupInfoForm';
import EditTemplate from '../../../components/app/myPage/EditTemplate';
import Title from '../../../components/app/common/Title';
const EditGroupInfoPage = () => {
  return (
    <div>
      <span>
        <Title title="내 그룹 수정" />
      </span>
      <EditTemplate>
        <EditGroupInfoForm />
      </EditTemplate>
    </div>
  );
};

export default EditGroupInfoPage;
