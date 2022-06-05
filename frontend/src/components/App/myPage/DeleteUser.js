import React, { useState } from 'react';
import './EditUserInfo.scss';

const EditUserInfo = ({ onChange, onClick }) => {
  return (
    <div className="edit-userInfo-area">
      <div className="blocks-cover">
        <div className="blocks">
          <div className="block-top" />
          <div className="block-bottom" />
        </div>
        <h2>회원 탈퇴</h2>
      </div>

      <div className="userInfo-form">
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>비밀번호</b>
          </div>
          <div className="userInfo-content">
            <input
              name="password"
              type="password"
              className="name"
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div className="btn-div">
        <hr />
        <p>
          회원 둘 이상이 그룹내에 속해 있을경우 수간호사 권한이 없을 경우에만
          회원 탈퇴가 가능합니다.
        </p>
        <button onClick={onClick}>회원 탈퇴</button>
      </div>
    </div>
  );
};

export default EditUserInfo;
