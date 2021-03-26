import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (e) => {
            setInputValue(e.target.value);
      };

      const handleSumit = (e) => {
            e.preventDefault();

            if (inputValue.trim().length > 0) {
                  setCategories((categories) => [inputValue, ...categories]);
                  setInputValue('');
            }
      };

      return (
            <form onSubmit={handleSumit}>
                  <h1>{inputValue}</h1>
                  <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                  />
            </form>
      );
};

AddCategory.propTypes = {
      setCategories: PropTypes.func.isRequired,
};
