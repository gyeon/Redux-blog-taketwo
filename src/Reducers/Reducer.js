import { ADD_AUTHOR, ADD_POST } from '../Actions/actions.js';

const Reducer = (state = {authors: [], posts: []}, action = {type: ''}) => {
  switch(action.type){
    case ADD_AUTHOR:
      let author = Object.assign({id: state.authors.length}, action.payload)
      let authors = state.authors.concat(author)
      return Object.assign({}, {authors: authors}, {posts: state.posts})
    case ADD_POST:
      let post = Object.assign({id: state.authors.length}, action.payload)
      let posts = state.posts.concat(post)
      return Object.assign({}, {authors: state.authors}, {posts: posts})
    default:
      return state
  }
}


export default Reducer;
