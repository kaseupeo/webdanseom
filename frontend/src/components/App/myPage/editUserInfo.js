import React, { useState } from 'react';
import './EditUserInfo.scss';

const EditUserInfo = ({
  onChange,
  onClickPwBtn,
  onClickEdit,
  onClickBack,
  onClickDelete,
  email,
  name,
  phoneNumber,
  errorMsg,
}) => {
  return (
    <div className="EditUserInfo">
      <div className="blocks-cover">
        <div className="blocks">
          <div className="block-top" />
          <div className="block-bottom" />
        </div>
        <h2>개인정보 수정</h2>
      </div>

      <div className="userInfo-form">
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>이메일</b>
          </div>
          <div className="userInfo-content">{email}</div>
        </div>
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>비밀번호</b>
          </div>
          <div className="userInfo-content">
            <button className="btn-password" onClick={onClickPwBtn}>
              비밀번호 변경
            </button>
          </div>
        </div>

        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>이름</b>
          </div>
          <div className="userInfo-content">
            <input
              name="name"
              type="text"
              className="name"
              maxLength="10"
              defaultValue={name}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>전화번호</b>
          </div>
          <div className="userInfo-content tel">
            <input
              name="phoneNumber"
              type="tel"
              className="tel"
              maxLength="11"
              defaultValue={phoneNumber}
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div className="btn-div">
        <b
          style={{
            marginLeft: '0.5rem',

            color: 'red',
          }}
        >
          {errorMsg}
        </b>
        <hr />

        <button className="btn-edit" onClick={onClickEdit}>
          <b>회원 정보 수정</b>
        </button>
        <button className="btn-delete" onClick={onClickDelete}>
          <b>회원 탈퇴</b>
        </button>
        <button className="btn-cancel" onClick={onClickBack}>
          <b>취소</b>
        </button>
      </div>
    </div>
  );
};

export default EditUserInfo;
