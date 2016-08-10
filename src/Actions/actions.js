export const ADD_AUTHOR = 'ADD_AUTHOR';

export function addAuthor(name) {
  return { type: ADD_AUTHOR, name }
}
