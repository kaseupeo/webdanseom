import client from './client';

/**
 * 이메일 토큰 값을 통한 그룹의 유무 판단
 * @param {} param0
 * @returns
 */
export const selectPreceptor = () =>
  client
    .get('/api/preceptor/select')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertPreceptor = ({ chargeNurseName, newNurseName }) =>
  client
    .post('/api/preceptor/add', {
      chargeNurseName: chargeNurseName,
      newNurseName: newNurseName,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const editPreceptor = ({ requestPreceptorList }) =>
  client
    .put('/api/preceptor/update', {
      requestPreceptorList: requestPreceptorList,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const deletePreceptor = ({ requestPreceptorList }) =>
  client
    .delete('/api/preceptor/delete', {
      requestPreceptorList: requestPreceptorList,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
