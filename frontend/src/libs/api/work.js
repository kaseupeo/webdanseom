import client from './client';

export const selectWorkHead = (strDate) =>
  client
    .get('/api/work/selectGroup/' + strDate)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const selectWorkNormal = (strDate) =>
  client
    .get('/api/work/selectNurse/' + strDate)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const selectWorkExtra = (strDate) =>
  client
    .get('/api/workExtra/selectWorkExtra/' + strDate)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const insertWork = ({ requestWorkList }) =>
  client
    .post('/api/work/add', {
      requestWorkList,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertWorkExtra = ({ requestWorkList }) =>
  client
    .post('/api/workExtra/addWorkExtra', { requestWorkList })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const deleteWorkExtra = ({ nurseList }) =>
  client
    .post('/api/workExtra/deleteWorkExtra', {
      requestWorkList: nurseList,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
