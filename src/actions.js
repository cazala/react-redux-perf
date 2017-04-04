// Action Types

export const SELECT = 'Select'


// Action Creators

export function select(bookId) {
  return {
    type: SELECT,
    bookId
  }
}
