/**
 * 작성자: 정진욱
 * 백엔드 axios 통신
 * 내 정보 관리
 */
import client from './client';

export const selectMember = () =>
  client
    .get('/api/member/profile')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();

export const updateMember = ({ name, phoneNumber }) =>
  client
    .put('/api/member/profile', { name, phoneNumber })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();

export const updatePassword = ({ beforePassword, afterPassword }) =>
  client
    .put('/api/member/updatePassword', {
      beforePassword: beforePassword,
      afterPassword: afterPassword,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();

export const deleteMember = ({ email, password }) =>
  client
    .delete('/api/member/withdrawal', {
      data: { email: email, password: password },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
