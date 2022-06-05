import client from './client';

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
