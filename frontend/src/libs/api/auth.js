/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 회원가입, 로그인 , 비밀번호찾기
 */
import client from './client';

export const login = ({ email, password }) =>
  client
    .post('/member/login', {
      email,
      password,
    })
    .then((response) => {
      alert('ddd');
    }, []);

export const signup = ({ email, password, userName, phone }) =>
  client
    .post('/member/signup', {
      email,
      password,
      userName,
      phone,
    })
    .then((response) => {
      alert(response.data);
    }, []);

export const verify = ({ userId }) => client.getUser('/verify', { userId });
export const getUser = (userId) =>
  client.get(`/member/${userId}/getUser`, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
    },
  });
