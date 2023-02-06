import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { TfiHandPointLeft } from 'react-icons/tfi';

import { getMovieDetails } from 'services/Api';
import { getGenresMovie } from 'services/getGenresMovie';
import { getYearDate } from 'services/getYearDate';

import { Loader } from 'components/Loader/Loader';

import {
  ContainerStyled,
  LinkStyled,
  CardStyled,
  BoxStyled,
  TextStyled,
  ListStyled,
  NavLinkStyled,
} from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <ContainerStyled>
      <LinkStyled to="/">
        <TfiHandPointLeft />
        Go Back
      </LinkStyled>
      {isLoading && <Loader />}
      {!isLoading && (
        <CardStyled>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <BoxStyled>
            <h3>
              {movie.title} ({getYearDate(movie.release_date)})
            </h3>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <p>
              <TextStyled>Overview</TextStyled> {movie.overview}
            </p>
            <p>
              <TextStyled>Genres</TextStyled> {getGenresMovie(movie.genres)}
            </p>
          </BoxStyled>
        </CardStyled>
      )}
      <BoxStyled>
        <TextStyled>Additional information</TextStyled>
        <ListStyled>
          <li>
            &#8594;
            <NavLinkStyled to={`/movies/${id}/cast`}>View cast information here</NavLinkStyled>
          </li>
          <li>
            &#8594;
            <NavLinkStyled to={`/movies/${id}/reviews`}>See reviews here</NavLinkStyled>
          </li>
        </ListStyled>
      </BoxStyled>
      <Outlet />
    </ContainerStyled>
  );
};
