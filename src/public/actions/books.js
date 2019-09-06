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