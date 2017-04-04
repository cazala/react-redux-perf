import { connect } from 'react-redux'
import { select } from '../actions'
import { getList, getUI } from '../selectors'
import Item from '../components/Item'

const mapStateToProps = (state, ownProps) => {
  const book = getList(state).find(book => book.id === ownProps.id)
  const ui = getUI(state)
  return {
    name: book.name,
    author: book.author,
    selected: ui.selected === ownProps.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: (id) => dispatch(select(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
