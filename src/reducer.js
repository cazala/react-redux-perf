import { combineReducers } from 'redux'
import { SELECT } from './actions'


// Books

const booksInitialState = {
  1: {
    id: 1,
    name: 'Lord of the Rings',
    authorId: 1,
  },
  2: {
    id: 2,
    name: 'The Hobbit',
    authorId: 1,
  },
  3: {
    id: 3,
    name: 'Harry Potter',
    authorId: 2,
  }
}

function booksReducer(state = booksInitialState, action) {
  switch (action.type) {
    //...
  }
  return state
}


// Authors

const authorsInitialState = {
  1: {
    id: 1,
    name: 'Tolkien'
  },
  2: {
    id: 2,
    name: 'Rowling'
  }
}

function authorsReducer(state = authorsInitialState, action) {
  switch (action.type) {
    //...
  }
  return state
}


// UI

const uiInitialState = {
  selected: null
}

function uiReducer(state = uiInitialState, action) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selected: action.bookId
      }
  }
  return state
}


// Reducer

export default combineReducers({
  books: booksReducer,
  authors: authorsReducer,
  ui: uiReducer
})
