import React, { PropTypes } from 'react';

const Author = ({name, id}) => {
  return (
    <option id={id} value={id}>{name}</option>
  )
}

export default Author;
