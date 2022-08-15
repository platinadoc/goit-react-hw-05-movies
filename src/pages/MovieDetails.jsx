import AddInfoNav from 'components/addInfoNav/AddInfoNav';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFullInfoById } from '../services/apiService';
import MovieDetails from 'components/movieDetails/MovieDetails';
import Loader from 'components/Loader';

const MovieDetailsInfo = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getFullInfoById(movieId)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <AddInfoNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsInfo;
