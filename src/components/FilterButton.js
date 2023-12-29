import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      type="button"
      className={`btn toggle-btn ${isPressed ? 'active' : ''}`}
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden">Göster: </span>
      <span>{name}</span>
      <span className="visually-hidden"> görevler</span>
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  isPressed: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default FilterButton;
