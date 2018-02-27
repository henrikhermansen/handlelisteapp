import React from 'react';
import PropTypes from 'prop-types';

const Suggestions = ({ values, input, onSelect }) => (
  !input ? null : values
    .filter(value => value.toLowerCase().includes(input.toLowerCase()))
    .filter(value => value !== input)
    .map(value => (
      <button
        key={value}
        onClick={() => onSelect(value)}
        style={{ display: 'block' }}
      >
        {value}
      </button>
    ))
);

Suggestions.propTypes = {
  values: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Suggestions;
