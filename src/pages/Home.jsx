import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../services/apiService';
import MoviesList from 'components/moviesList/MoviesList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms()
      .then(res => setTrendingFilms(res.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <MoviesList title={'Trending today'} films={trendingFilms} />
    </>
  );
};

export default Home;
