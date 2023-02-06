import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MoviesPage/MovieDetailsPage/MovieDetailsPage';
import { CastPage } from 'pages/MoviesPage/MovieDetailsPage/CastPage/CastPage';
import { ReviewPage } from 'pages/MoviesPage/MovieDetailsPage/ReviewsPage/ReviewPage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewPage />} />
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
