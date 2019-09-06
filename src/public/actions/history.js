import Axios from 'axios';

export const getHistory = () => {
  return {
    type: 'GET_HISTORY',
    payload: Axios.get('http://192.168.56.1:8080/books/history'),
  };
};
