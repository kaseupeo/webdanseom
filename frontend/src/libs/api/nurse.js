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
      console.log(response);
      if (response.data.message === '간호사 목록 조회 실패')
        return { nurses: [''] };

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertNurse = ({ name, charge, position, annualLeave }) =>
  client
    .post('/api/nurse/add', {
      name: name,
      charge: charge,
      position: position,
      annualLeave: annualLeave,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteNurse = () =>
  client
    .delete('/api/nurse/delete')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
