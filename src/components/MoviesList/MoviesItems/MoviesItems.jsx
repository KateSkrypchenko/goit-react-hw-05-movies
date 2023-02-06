import { BiCameraMovie } from 'react-icons/bi';

import { LinkStyled, TitleStyled, Image } from './MoviesItems.styled';

export const MoviesItems = ({ id, title, poster_path }) => {
  return (
    <li key={id}>
      <LinkStyled to={`/movies/${id}`}>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <TitleStyled>
          <BiCameraMovie />
          {title}
        </TitleStyled>
      </LinkStyled>
    </li>
  );
};
