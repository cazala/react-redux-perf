// selectors
export const getBooks = (state) => state.books
export const getAuthors = (state) => state.authors
export const getUI = (state) => state.ui

// compute book list
export const getList = (state) => {

  const books = getBooks(state)
  const authors = getAuthors(state)
  const ui = getUI(state)

  return Object.keys(books)
  .map(bookId => {
    const book = books[bookId]
    return {
      ...book,
      author: authors[book.authorId],
      selected: ui.selected === book.id
    }
  })
}
