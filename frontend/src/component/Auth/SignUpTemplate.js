import React from 'react';
import './SignUpElement.scss';
import './AuthTemplate.scss'
import { Link } from 'react-router-dom';
const JoinElement = () => {



    /*회원 가입시 처리*/
    const onClickSignUp = () => {
     alert("회원가입이 완료되었습니다!");
    };

    return (
         <div className="AuthTemplate">



                <div className="login-title">회원가입</div>

                <div className="content">



        <div className="SignUpElement">
            <b>이메일
            <input type="text" placeholder="이메일"/>
            </b>
            <b>비밀번호</b>
            <input type="password" placeholder="비밀번호"/>
            <input type="password" placeholder="비밀번호 재확인"/>
            <b>이름</b>
            <input type="text" placeholder="이름"/>
            <Link to="/auth/login"  className="signBtn">가입하기</Link>

        </div>
        </div>
        </div>
    );
};

export default JoinElement;
