import React from 'react';

const FindPasswordPost = ({ email }) => {
  const contentStyle = {
    paddingTop: 60,
    fontSize: 20,
    paddingBottom: 60,
  };

  return (
    <div className="content">
      <b style={contentStyle}>
        비밀번호 변경 링크를
        <br />
        {email}
        <br />로 발송되었어요
      </b>
    </div>
  );
};

export default FindPasswordPost;
