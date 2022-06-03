/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 내 정보, 그룹 관리
 */
import client from './client';

/**
 * 이메일 토큰 값을 통한 그룹의 유무 판단
 * @param {} param0
 * @returns
 */
export const selectGroup = () =>
  client
    .get('/api/nurseGroup/selectGroup')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const createGroup = ({ groupName }) =>
  client
    .post('/api/nurseGroup/createGroup', { groupName: groupName })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const joinGroup = ({ inviteLink }) =>
  client
    .post('/api/nurseGroup/join', { inviteLink: inviteLink })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const inviteGroup = () =>
  client
    .post('/api/nurseGroup/invite')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
