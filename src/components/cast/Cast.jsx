import { useEffect, useState } from 'react';
import { getCast } from 'services/apiService';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <ul className={s.castList}>
          {cast.map(
            el =>
              el.profile_path && (
                <li className={s.castItem} key={el.credit_id}>
                  {el.profile_path && (
                    <img
                      className={s.castImage}
                      src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                      alt={el.name}
                    />
                  )}
                  <h3>{el.name}</h3>
                  <p>Character: {el.character}</p>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
