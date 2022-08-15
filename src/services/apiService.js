import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = 'e8d4c6f2420119eaaf1bee0b0d0a70d8';

export const getTrendingFilms = async () => {
  try {
    const response = await axios.get(
      `${URL}/trending/movie/week?api_key=${KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFullInfoById = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}?api_key=${KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );

    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFilmsBySearch = async query => {
  return await axios(`${URL}search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    },
  }).then(response => response.data);
};
