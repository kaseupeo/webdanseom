import React, { useState } from 'react';
import './EditUserInfo.scss';

const EditUserInfo = ({}) => {
  return (
    <div className="edit-userInfo-area">
      <div className="blocks-cover">
        <div className="blocks">
          <div className="block-top" />
          <div className="block-bottom" />
        </div>
        <h2>비밀번호 변경</h2>
      </div>

      <div className="userInfo-form">
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>현재 비밀번호</b>
          </div>
          <div className="userInfo-content">
            <input name="name" type="text" className="name" maxLength="10" />
          </div>
        </div>

        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>새 비밀번호</b>
          </div>
          <div className="userInfo-content">
            <input
              name="phoneNumber"
              type="tel"
              className="tel"
              maxLength="11"
            />
          </div>
        </div>
        <div className="userInfo-row">
          <div className="userInfo-title">
            <b>새 비밀번호 확인</b>
          </div>
          <div className="userInfo-content">
            <input
              name="phoneNumber"
              type="tel"
              className="tel"
              maxLength="11"
            />
          </div>
        </div>
      </div>

      <div className="btn-div">
        <hr />
        <p>
          비밀 번호는 8자 이상의 영문 대/소문자 , 숫자, 특수기호 조합을 사용할
          수 있습니다.
        </p>
        <button>비밀번호 변경</button>
      </div>
    </div>
  );
};

export default EditUserInfo;
