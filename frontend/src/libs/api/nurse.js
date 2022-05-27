/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 간호사 설정 관리
 */
import client from './client';

export const selectNurse = ({ seq }) =>
  client
    .get('/api/nurse/select', { seq })
    .then((response) => {
      console.log(response.data.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertNurse = () =>
  client
    .get('/api/nurse/add')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteNurse = () =>
  client
    .get('/api/nurse/delete')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
