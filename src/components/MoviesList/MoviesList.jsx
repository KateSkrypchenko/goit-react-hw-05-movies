import { MoviesItems } from './MoviesItems/MoviesItems';

import { ListStyled } from './MoviesListTrend.styled';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ListStyled>
        {movies.map(({ id, title, poster_path }) => (
          <MoviesItems key={id} id={id} title={title} poster_path={poster_path} />
        ))}
      </ListStyled>
    </div>
  );
};
