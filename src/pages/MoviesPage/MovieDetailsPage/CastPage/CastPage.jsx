import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';

import { ListStyled } from './CastPage.styled';

export const CastPage = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieCast(id);
        setCast(response.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <div>
          <ListStyled>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt={name} width="150" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ListStyled>
        </div>
      )}
    </div>
  );
};
