import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import './editUserInfo.scss'

const Temp2Contents = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    // const [tel, setTel] = useState({
    //     tel1: "",
    //     tel2: "",
    //     tel3: ""
    // })

    const onChangeEmail = (e) => { setEmail(e.target.value || "") }
    const onChangePassword = (e) => { setPassword(e.target.value || "") }
    const onChangePasswordConfirm = (e) => { setPasswordConfirm(e.target.value || "") }
    const onChangeName = (e) => { setName(e.target.value || "") }
    const onChangeTel = (e) => { setTel(e.target.value || "") }

    // const onChangeTel1 = (e) => {
    //     const value = e.target.value || "";
    //     setTel(prev => { return {...prev, tel1: value.replace(/[^0-9]/g,'') } })
    // }
    // const onChangeTel2 = (e) => {
    //     const value = e.target.value || "";
    //     setTel(prev => { return {...prev, tel2: value.replace(/[^0-9]/g,'') } })
    // }
    // const onChangeTel3 = (e) => {
    //     const value = e.target.value || "";
    //     setTel(prev => { return {...prev, tel3: value.replace(/[^0-9]/g,'') } })
    // }

    const onClickEditUserInfo = () => {
        if(email === ""){
            alert("E-mail을 입력해주세요")
        }
        else if (!/^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(email)) {
            alert('이메일 형식이 맞지 않습니다.');
        }
        else if(password === ""){
            alert("비밀번호를 입력해주세요")
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/.test(password)) {
            alert('비밀번호는 영문,숫자,특수문자를 포함한 8자 이상이어야 합니다.');
        }
        else if(passwordConfirm === ""){
            alert("비밀번호 확인을 입력해주세요")
        }
        else if(password !== passwordConfirm){
            alert("비밀번호가 일치하지 않습니다.")
        }
        else if(name === ""){
            alert("이름을 입력해주세요")
        }
        else if(tel === ""){
            alert("전화번호를 입력해주세요")
        }
        else if (!/^\d{11}$/.test(tel)) {
            alert('올바른 전화번호 형식이 아닙니다.(하이픈 - 없이 11자리)');
        }
        else{
            console.log(email)
            console.log(password)
            console.log(name)
            console.log(tel)
        }
    }

    // const PasswordCheck = () => {
    //     if(passwordConfirm !== ""){
    //         if(passwordConfirm !== password){
    //             return (
    //                 <label className="password-confirm">* 비밀번호가 일치하지 않습니다.</label>
    //                 )
    //         }
    //     }
    //     return (<></>)
    // }

    return (
        <div className="edit-userInfo-area">
            <div className="blocks-cover">
                <div className="blocks">
                    <div className="block-top" />
                    <div className="block-bottom" />
                </div>
                <h2>개인정보 수정</h2>
            </div>
            <p>아래 내용을 빠짐없이 기재해주세요.</p>
            <div className="userInfo-form">
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>이메일</span></div>
                    <div className="userInfo-content"><input type="email" className="email" maxLength="50" onChange={onChangeEmail} value={email} /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>비밀번호</span></div>
                    <div className="userInfo-content"><input type="password" className="password" maxLength="50" onChange={onChangePassword} value={password} /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>비밀번호 확인</span></div>
                    <div className="userInfo-content"><input type="password" className="password" maxLength="50" onChange={onChangePasswordConfirm} value={passwordConfirm} />
                        {/* <PasswordCheck /> */}
                    </div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>이름</span></div>
                    <div className="userInfo-content"><input type="text" className="name" maxLength="10" onChange={onChangeName} value={name} /></div>
                </div>
                <div className="userInfo-row">
                    <div className="userInfo-title"><span>전화번호</span></div>
                    <div className="userInfo-content tel">
                        <input type="tel" className="tel" maxLength="11" onChange={onChangeTel} value={tel} />
                        {/* <input type="tel" className="tel tel-1" maxLength="3" onChange={onChangeTel1} value={tel["tel1"]} /><span>-</span>
                        <input type="tel" className="tel tel-2" maxLength="4" onChange={onChangeTel2} value={tel["tel2"]} /><span>-</span>
                        <input type="tel" className="tel tel-3" maxLength="4" onChange={onChangeTel3} value={tel["tel3"]} /> */}
                    </div>
                </div>
            </div>
            <button onClick={onClickEditUserInfo}>회원 정보 수정</button>
        </div>
    )
}

export default Temp2Contents;