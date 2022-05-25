/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 내 정보 관리
 */
import client from './client';

export const memberUpdate = () =>
  client
    .post('/api/member/')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
