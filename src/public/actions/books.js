import Axios from 'axios';

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
      `http://192.168.56.1:8080/books?page=${page}&sort=${sort}&order=${order}${querySearch}${queryGenre}${queryLimit}`,
    ),
  };
};
export const rentBook = (book_id, user_id) => {
  return {
    type: 'RENT_BOOK',
    payload: Axios.patch(`http://192.168.56.1:8080/books/rent/${book_id}`, {
      // payload: Axios.patch(`https://remotemysql.com:3306/books/rent/${book_id}`, {
      user_id,
    }),
  };
};

export const returnBook = (book_id, user_id) => {
  return {
    type: 'RETURN_BOOK',
    payload: Axios.patch(`http://192.168.56.1:8080/books/return/${book_id}`, {
      // payload: Axios.patch(`https://remotemysql.com:3306/books/return/${book_id}`, {
      user_id,
    }),
  };
};
