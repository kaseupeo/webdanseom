import client from './client';

/**
 *
 *
 * @param {*} param0
 * @returns
 */
export const poo = ({}) =>
  client.post('/api', {}).then((response) => {
    console.log(response.data);
    return response;
  });
