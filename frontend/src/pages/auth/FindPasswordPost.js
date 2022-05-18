import React from 'react';

import AuthTemplate from '../../components/auth/AuthTemplate';
const FindPasswordPost = () => {
  const contentStyle = {
    paddingTop: 60,
    fontSize: 20,
    paddingBottom: 60,
  };

  return (
    <AuthTemplate title="발송완료">
      <div className="content">
        <b style={contentStyle}>
          비밀번호 변경 링크를
          <br />
          {FindPasswordPost.email}
          <br />로 발송되었어요
        </b>
      </div>
    </AuthTemplate>
  );
};

export default FindPasswordPost;
