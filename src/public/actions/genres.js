import Axios from 'axios';

export const getGenres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get('https://mysterious-badlands-23204.herokuapp.com/books/genre'),
  };
};