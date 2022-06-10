import client from './client';

export const selectWorkHead = ({ strDate }) =>
  client
    .get('/api/work/select/' + { strDate }, {})
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const selectWorkNormal = ({ strDate }) =>
  client
    .get('/api/work/select' + { strDate })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertWork = () =>
  client
    .post('/api/work/add')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertWorkExtra = () =>
  client
    .post('/api/workExtra/addWorkExtra')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const deleteWorkExtra = () =>
  client
    .post('/api/workExtra/deleteWorkExtra')
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
