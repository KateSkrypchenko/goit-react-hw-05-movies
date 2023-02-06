import { useState, useEffect } from 'react';

import { getTrendMovies } from 'services/Api';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { ContainerStyled, TitleStyled } from './HomePage.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getTrendMovies();
        setMovies(response.results);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <ContainerStyled>
      <TitleStyled>Trending today</TitleStyled>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </ContainerStyled>
  );
};
