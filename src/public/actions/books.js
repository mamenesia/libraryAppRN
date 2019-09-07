import Axios from 'axios';
// http://192.168.56.1:8080

export const getBooks = (
  limit = null,
  page = 1,
  sort = 'released_at',
  order = 'DESC',
  search = null,
  genre = null,
) => {
  const querySearch = search !== null ? `&search=${search}` : '';
  const queryGenre = genre !== null ? `&genre=${genre}` : '';
  const queryLimit = limit !== null ? `&limit=${limit}` : '';
  return {
    type: 'GET_BOOKS',
    payload: Axios.get(
      `https://mysterious-badlands-23204.herokuapp.com/books?page=${page}&sort=${sort}&order=${order}${querySearch}${queryGenre}${queryLimit}`,
    ),
  };
};
export const rentBook = (book_id, user_id) => {
  return {
    type: 'RENT_BOOK',
    payload: Axios.patch(
      `https://mysterious-badlands-23204.herokuapp.com/books/rent/${book_id}`,
      {
        // payload: Axios.patch(`https://remotemysql.com:3306/books/rent/${book_id}`, {
        user_id,
      },
    ),
  };
};

export const returnBook = (book_id, user_id) => {
  return {
    type: 'RETURN_BOOK',
    payload: Axios.patch(
      `https://mysterious-badlands-23204.herokuapp.com/books/return/${book_id}`,
      {
        // payload: Axios.patch(`https://remotemysql.com:3306/books/return/${book_id}`, {
        user_id,
      },
    ),
  };
};
