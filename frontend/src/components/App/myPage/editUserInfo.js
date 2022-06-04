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
}) => {
  // const onClickEditUserInfo = () => {
  //   if (email === '') {
  //     alert('E-mail을 입력해주세요');
  //   } else if (
  //     !/^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
  //       email,
  //     )
  //   ) {
  //     alert('이메일 형식이 맞지 않습니다.');
  //   } else if (password === '') {
  //     alert('비밀번호를 입력해주세요');
  //   } else if (
  //     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/.test(
  //       password,
  //     )
  //   ) {
  //     alert('비밀번호는 영문,숫자,특수문자를 포함한 8자 이상이어야 합니다.');
  //   } else if (passwordConfirm === '') {
  //     alert('비밀번호 확인을 입력해주세요');
  //   } else if (password !== passwordConfirm) {
  //     alert('비밀번호가 일치하지 않습니다.');
  //   } else if (name === '') {
  //     alert('이름을 입력해주세요');
  //   } else if (tel === '') {
  //     alert('전화번호를 입력해주세요');
  //   } else if (!/^\d{11}$/.test(tel)) {
  //     alert('올바른 전화번호 형식이 아닙니다.(하이픈 - 없이 11자리)');
  //   } else {

  //   }
  // };

  return (
    <div className="edit-userInfo-area">
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
        <button className="btn-edit" onClick={onClickEdit}>
          <b>회원 정보 수정</b>
        </button>
        <button className="btn-cancel" onClick={onClickBack}>
          <b>취소</b>
        </button>
      </div>

      <button onClick={onClickDelete}>
        <b>회원 탈퇴</b>
      </button>
    </div>
  );
};

export default EditUserInfo;
