import { createSelector } from 'reselect'

// selectors
export const getBooks = (state) => state.books
export const getAuthors = (state) => state.authors
export const getUI = (state) => state.ui

// compute book list
export const getList = createSelector(
  getBooks,
  getAuthors,
  (books, authors) => Object.keys(books)
    .map(bookId => {
      const book = books[bookId]
      return {
        ...book,
        author: authors[book.authorId]
      }
    })
)
