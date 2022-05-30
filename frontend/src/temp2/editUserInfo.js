import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import './editUserInfo.scss'

const Temp2Contents = () => {

    return (
        <div className="edit-userInfo-area">
            <h2>개인정보 수정</h2>
            <p>아래 내용을 빠짐없이 기재해주세요.</p>
            <div className="userInfo-form">
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>이메일</span></div>
                    <div className="userInfo-content"><input type="text" className="" /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>비밀번호</span></div>
                    <div className="userInfo-content"><input type="password" className="" /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>이름</span></div>
                    <div className="userInfo-content"><input type="text" className="" /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>전화번호</span></div>
                    <div className="userInfo-content"><input type="text" className="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Temp2Contents;