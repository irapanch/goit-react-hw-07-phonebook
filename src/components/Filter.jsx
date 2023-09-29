import React from 'react';

import { StyledDesc, StyledContact } from '../styles/App.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <StyledContact>
      <StyledDesc>Find contacts by name</StyledDesc>
      <input
        type="text"
        name="search"
        onChange={e => dispatch(updateFilter(e.target.value))}
        value={filter}
        placeholder="Search by name"
      />
    </StyledContact>
  );
};
export default Filter;
