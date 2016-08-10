import React from 'react';

const AuthorDropdown = ({authorsList}) => {
  return (
    <select>{authorsList}
      <option value="Authors">Choose Author</option>
    </select> //make container of authorsList passing AuthorDropdown that will map through list of authors
)}

export default AuthorDropdown;
