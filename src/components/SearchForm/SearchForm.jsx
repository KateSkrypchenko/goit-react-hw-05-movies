import { useState } from 'react';
import PropTypes from 'prop-types';

import { FormStyled, InputStyled, ButtonStyled } from './SearchForm.styled';

export const SearchForm = ({ onChangeSearch }) => {
  const [query, setQuery] = useState('');

  const handelInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase().trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onChangeSearch(query);
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <InputStyled
        type="text"
        onChange={handelInputChange}
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        required
      />
      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

SearchForm.propTypes = {
  onChangeSearch: PropTypes.func.isRequired,
};
