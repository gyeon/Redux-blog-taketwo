import React from 'react'
import { connect } from 'react-redux';
import { addAuthor } from '../../Actions/actions.js';

let AddAuthor = ({ dispatch }) => {
  let input
  return (
    <div>
      <form className="AuthorForm" onSubmit={event => {
        event.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addAuthor(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }}/>
        <input type="submit" />
      </form>
    </div>
  )
}

AddAuthor = connect()(AddAuthor)


export default AddAuthor;
