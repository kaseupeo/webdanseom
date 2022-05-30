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

export const insertDutyCode = ({
  dutyCode,
  dutyCodeName,
  hexColor,
  isUsable,
}) =>
  client
    .get('/api/duty/addDuty')
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      {
        dutyCode: dutyCode,
        dutyCodeName: dutyCodeName,
        hexColor: hexColor,
        isUsable: isUsable,
      },
    )
    .catch((error) => {
      console.log(error);
    });

export const deleteDutyCode = ({ checkedDutyCodeList }) =>
  client
    .get('/api/duty/deleteDuty', {
      data: { dutyCodeList: checkedDutyCodeList },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
export const editDutyCode = ({ dutyCodeList }) =>
  client
    .get('/api/duty/updateDuty', { dutyCodeList: dutyCodeList })
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
