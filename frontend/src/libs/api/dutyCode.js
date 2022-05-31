import client from './client';

export const selectDutyCode = ({ seq }) =>
  client
    .get('/api/duty/selectDuty', { seq })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const insertDutyCode = () =>
  client
    .post('/api/duty/addDuty')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteDutyCode = ({ checkedDutyCodeList }) =>
  client
    .Delete('/api/duty/deleteDuty', {
      data: { dutyCodeList: checkedDutyCodeList },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const editDutyCode = ({ dutyList }) =>
  client
    .put('/api/duty/updateDuty', { dutyList })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const initDutyCode = () =>
  client
    .get('/api/duty/returnDuty')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
