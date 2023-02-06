import { useState, useEffect } from 'react';
import { getMovieByName } from 'services/Api';
import { useSearchParams } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { ContainerStyled } from './MoviesPage.styled';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieByName(query);
        setMovies(response.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const onChangeSearch = query => {
    setSearchParams({ query });
  };

  return (
    <ContainerStyled>
      <SearchForm onChangeSearch={onChangeSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </ContainerStyled>
  );
};
