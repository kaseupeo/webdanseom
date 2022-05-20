/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 회원가입, 로그인 , 비밀번호찾기
 */
import client from './client';

/**
 *  로그인 post 통신
 *
 * @param {*} param0
 * @returns {response: "성공여부" , message: "메시지", data: "token" or null }
 */
export const login = ({ email, password }) =>
  client
    .post('/api/member/login', {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    });
/**
 *  회원가입 post 통신
 * @param {*} param0
 * @returns  {response: "성공여부" , message: "메시지", data: "메시지" or null }
 */
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
      return response;
    });
/**
 * 이메일을 통한 비밀번호 찾기 => 이메일로 링크 전송
 *
 * @param {*} param0
 * @returns {response: "성공여부" , message: "메시지", data: "메시지" or null }
 */
export const findPassword = (
  { email }, //avast(메일실드) 같은 백신 프로그램 설정해줘야됨
) =>
  client
    .post('/api/member/password', {
      email,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    });
