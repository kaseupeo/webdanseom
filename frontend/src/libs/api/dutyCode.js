import client from './client';

export const selectDutyCode = ({ seq }) =>
  client
    .get('/api/nurse/select?seq=3')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertDutyCode = () =>
  client
    .get('/api/nurse/add')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteDutyCode = () =>
  client
    .get('/api/nurse/delete')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
