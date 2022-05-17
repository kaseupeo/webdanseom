/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 회원가입, 로그인 , 비밀번호찾기
 */
import client from './client';

export const login = ({ email, password }) =>
  client
    .post('/api/member/login', {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
    }, []);

export const signup = ({ email, password, name, phoneNumber }) =>
  client
    .post('/api/member/signup', {
      email,
      password,
      name,
      phoneNumber,
    })
    .then((response) => {
      console.log(response.data);
    }, []);

export const verify = ({ userId }) => client.getUser('/verify', { userId });
export const getUser = (userId) =>
  client.get(`/api/member/${userId}/getUser`, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
    },
  });
