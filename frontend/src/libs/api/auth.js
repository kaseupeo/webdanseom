/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 회원가입, 로그인 , 비밀번호찾기
 */
import client from './client';

export const login = ({ email, password }) =>
  client.post('/login', {
    email,
    password,
  });

export const signup = ({ email, password, userName, phone }) =>
  client.post('/signup', {
    email,
    password,
    userName,
    phone,
  });

export const verify = ({ userId }) => client.getUser('/verify', { userId });
