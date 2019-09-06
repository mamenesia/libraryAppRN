import Axios from 'axios';

export const getGenres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get('http://192.168.56.1:8080/books/genre'),
  };
};
