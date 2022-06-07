import React from 'react';
import { useEffect, useState, useRef } from 'react';

const MyPageModal = ({
  memberName,
  onClickEditUserInfo,
  onClickEditGroupInfo,
  onClickLogout,
}) => {
  return (
    <div className="myPageMenu">
      <div className="myName">
        <b>{memberName} 님</b>
      </div>
      <ul style={{ margin: '0px' }}>
        <li onClick={onClickEditUserInfo}>내 정보 수정</li>
        <li onClick={onClickEditGroupInfo}>그룹 설정</li>
        <hr />
        <li onClick={onClickLogout}>로그아웃</li>
      </ul>
    </div>
  );
};

export default MyPageModal;
