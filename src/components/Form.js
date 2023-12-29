import React, { useState } from "react";
import PropTypes from 'prop-types';

function Form({ addTask }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      
      return;
    }
    addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Yapılacak İş Nedir?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        placeholder="Yapılacak bir görev girin"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Ekle
      </button>
    </form>
  );
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default Form;
