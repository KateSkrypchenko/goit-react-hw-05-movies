import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';

import { ItemStyled, TextStyled } from './ReviewPage.styled';

export const ReviewPage = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieReviews(id);
        setReview(response.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <div>
          <ul>
            {review.map(({ id, author, content }) => (
              <ItemStyled key={id}>
                <TextStyled>Author {author}</TextStyled>
                <p>{content}</p>
              </ItemStyled>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
