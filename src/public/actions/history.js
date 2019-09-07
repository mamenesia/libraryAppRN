import Axios from 'axios';

export const getHistory = () => {
  return {
    type: 'GET_HISTORY',
    payload: Axios.get(
      'https://mysterious-badlands-23204.herokuapp.com/books/history',
    ),
  };
};
